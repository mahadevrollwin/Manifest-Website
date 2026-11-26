"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

// Minimal typings for the Web Speech API (not part of TypeScript's DOM lib).
type SpeechResultList = { length: number; [index: number]: { 0: { transcript: string }; isFinal: boolean } };
type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: { results: SpeechResultList }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

export type EndReason = "stopped" | "silence" | "error";

function getCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

const noopSubscribe = () => () => {};

const ERRORS: Record<string, string> = {
  "not-allowed": "Microphone access is blocked. Allow it in your browser's site settings, then tap the microphone again.",
  "service-not-allowed": "Microphone access is blocked. Allow it in your browser's site settings, then tap the microphone again.",
  "audio-capture": "No microphone was found, or another app is using it.",
  network: "Voice input needs an internet connection (your browser sends the audio to its speech service).",
  "language-not-supported": "Your browser does not support voice input in this language.",
};

/** Phones share one microphone between apps and tabs, so the level meter (a second capture) is only used on desktops. */
const canMeter = () =>
  typeof navigator !== "undefined" &&
  !!navigator.mediaDevices?.getUserMedia &&
  !/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) &&
  !(navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const MAX_SILENT_RESTARTS = 3;
const QUIET_AFTER_MS = 5000;

function join(a: string, b: string) {
  return [a.trim(), b.trim()].filter(Boolean).join(" ");
}

/**
 * Speech-to-text using the browser's Web Speech API.
 *
 * - Restarts itself when the browser ends a session on its own (silence timeouts, per-phrase endings on phones) and
 *   stitches the pieces together, so dictation keeps going until the user stops it.
 * - On desktops it also opens the microphone with echo cancellation, noise suppression and auto-gain to drive a live level
 *   meter and to warn when the signal is too quiet to be recognised.
 */
export function useSpeechInput() {
  const supported = useSyncExternalStore(noopSubscribe, () => getCtor() !== null, () => false);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tooQuiet, setTooQuiet] = useState(false);
  const [hasMeter, setHasMeter] = useState(false);

  const levelRef = useRef(0);
  const restartRef = useRef<() => void>(() => {});
  const recRef = useRef<SpeechRecognitionLike | null>(null);
  const wantedRef = useRef(false);
  const onTextRef = useRef<((text: string) => void) | null>(null);
  const onEndRef = useRef<((reason: EndReason) => void) | null>(null);
  const committedRef = useRef("");
  const currentRef = useRef("");
  const silentRestartsRef = useRef(0);
  const heardResultRef = useRef(false);
  const restartTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const meterRef = useRef<{ stream: MediaStream; ctx: AudioContext; timer: ReturnType<typeof setInterval> } | null>(null);

  const stopMeter = useCallback(() => {
    const meter = meterRef.current;
    meterRef.current = null;
    levelRef.current = 0;
    setHasMeter(false);
    setTooQuiet(false);
    if (!meter) return;
    clearInterval(meter.timer);
    meter.stream.getTracks().forEach((t) => t.stop());
    meter.ctx.close().catch(() => {});
  }, []);

  const finish = useCallback(
    (reason: EndReason) => {
      wantedRef.current = false;
      clearTimeout(restartTimerRef.current);
      stopMeter();
      setListening(false);
      const cb = onEndRef.current;
      onEndRef.current = null;
      cb?.(reason);
    },
    [stopMeter],
  );

  const startMeter = useCallback(async () => {
    if (!canMeter() || meterRef.current) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 },
      });
      if (!wantedRef.current || meterRef.current) {
        stream.getTracks().forEach((t) => t.stop());
        return;
      }
      const ctx = new AudioContext();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      ctx.createMediaStreamSource(stream).connect(analyser);
      const data = new Uint8Array(analyser.fftSize);
      const startedAt = Date.now();
      let heard = false;
      const timer = setInterval(() => {
        analyser.getByteTimeDomainData(data);
        let sum = 0;
        for (const v of data) sum += ((v - 128) / 128) ** 2;
        const rms = Math.sqrt(sum / data.length);
        levelRef.current = Math.min(1, rms * 7);
        if (rms > 0.025) {
          heard = true;
          setTooQuiet(false);
        } else if (!heard && Date.now() - startedAt > QUIET_AFTER_MS) {
          setTooQuiet(true);
        }
      }, 80);
      meterRef.current = { stream, ctx, timer };
      setHasMeter(true);
    } catch (e) {
      // Recognition reports its own errors; only a hard permission block is worth surfacing early.
      if (e instanceof DOMException && (e.name === "NotAllowedError" || e.name === "SecurityError") && wantedRef.current) {
        setError(ERRORS["not-allowed"]);
        recRef.current?.abort();
        finish("error");
      }
    }
  }, [finish]);

  const createRecognition = useCallback(() => {
    const Ctor = getCtor();
    if (!Ctor) return;
    const rec = new Ctor();
    rec.lang = navigator.language || "en-US";
    // Desktop browsers keep one session open; phones end a session after each phrase, so we restart instead.
    rec.continuous = !window.matchMedia("(pointer: coarse)").matches;
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    let fatal = false;
    let sawNoSpeech = false;

    rec.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) transcript += event.results[i][0].transcript;
      currentRef.current = transcript.trim();
      if (currentRef.current) {
        heardResultRef.current = true;
        silentRestartsRef.current = 0;
        setTooQuiet(false);
      }
      onTextRef.current?.(join(committedRef.current, currentRef.current));
    };
    rec.onerror = (event) => {
      if (event.error === "aborted") return;
      if (event.error === "no-speech") {
        sawNoSpeech = true;
        return;
      }
      fatal = true;
      setError(ERRORS[event.error] ?? "Voice input stopped unexpectedly. Please try again.");
    };
    rec.onend = () => {
      if (recRef.current === rec) recRef.current = null;
      committedRef.current = join(committedRef.current, currentRef.current);
      const hadSpeech = currentRef.current.length > 0;
      currentRef.current = "";
      if (!wantedRef.current) return; // stop() or finish() already handled the end of the session
      if (fatal) {
        finish("error");
        return;
      }
      if (!hadSpeech || sawNoSpeech) {
        silentRestartsRef.current += 1;
        if (silentRestartsRef.current >= MAX_SILENT_RESTARTS && !heardResultRef.current) {
          setError("I could not hear anything. Check that the right microphone is selected and not muted, then try again.");
          finish("silence");
          return;
        }
        if (silentRestartsRef.current >= MAX_SILENT_RESTARTS * 2) {
          finish("silence");
          return;
        }
      }
      restartTimerRef.current = setTimeout(() => {
        if (!wantedRef.current) return;
        restartRef.current();
      }, 250);
    };

    recRef.current = rec;
    try {
      rec.start();
    } catch {
      recRef.current = null;
      setError("Voice input could not start. Please try again.");
      finish("error");
    }
  }, [finish]);

  useEffect(() => {
    restartRef.current = createRecognition;
  }, [createRecognition]);

  /** Starts listening. `onText` receives the whole transcript of this dictation each time it changes. */
  const start = useCallback(
    (onText: (text: string) => void, onEnd?: (reason: EndReason) => void) => {
      if (!getCtor()) {
        setError("Voice input is not supported in this browser. Try Chrome, Edge or Safari.");
        return;
      }
      recRef.current?.abort();
      clearTimeout(restartTimerRef.current);
      setError(null);
      onTextRef.current = onText;
      onEndRef.current = onEnd ?? null;
      committedRef.current = "";
      currentRef.current = "";
      silentRestartsRef.current = 0;
      heardResultRef.current = false;
      wantedRef.current = true;
      setListening(true);
      createRecognition();
      void startMeter();
    },
    [createRecognition, startMeter],
  );

  /** Stops listening. By default the last words are still delivered; `discard` drops them (used when a message is sent). */
  const stop = useCallback(
    (discard = false) => {
      if (!wantedRef.current) return;
      if (discard) onTextRef.current = null;
      const rec = recRef.current;
      finish("stopped");
      if (rec) {
        if (discard) rec.abort();
        else rec.stop();
      }
    },
    [finish],
  );

  const clearError = useCallback(() => setError(null), []);

  useEffect(
    () => () => {
      wantedRef.current = false;
      onTextRef.current = null;
      onEndRef.current = null;
      clearTimeout(restartTimerRef.current);
      recRef.current?.abort();
      stopMeter();
    },
    [stopMeter],
  );

  return { supported, listening, error, tooQuiet, hasMeter, levelRef, start, stop, clearError };
}
