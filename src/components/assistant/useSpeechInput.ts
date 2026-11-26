"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

// Minimal typings for the Web Speech API (not part of TypeScript's DOM lib).
type SpeechResultList = { length: number; [index: number]: { 0: { transcript: string }; isFinal: boolean } };
type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: { results: SpeechResultList }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};
type SpeechRecognitionCtor = new () => SpeechRecognitionLike;

function getCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: SpeechRecognitionCtor; webkitSpeechRecognition?: SpeechRecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

const noopSubscribe = () => () => {};

const ERRORS: Record<string, string> = {
  "not-allowed": "Microphone access is blocked. Allow it in your browser settings to use voice input.",
  "service-not-allowed": "Microphone access is blocked. Allow it in your browser settings to use voice input.",
  "no-speech": "I did not hear anything. Tap the microphone and try again.",
  "audio-capture": "No microphone was found on this device.",
  network: "Voice input needs an internet connection.",
};

/** Speech-to-text using the browser's Web Speech API. `onText` receives the full transcript of the current dictation. */
export function useSpeechInput() {
  const supported = useSyncExternalStore(noopSubscribe, () => getCtor() !== null, () => false);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recRef = useRef<SpeechRecognitionLike | null>(null);

  const stop = useCallback(() => {
    recRef.current?.stop();
  }, []);

  const start = useCallback((onText: (transcript: string) => void) => {
    const Ctor = getCtor();
    if (!Ctor) {
      setError("Voice input is not supported in this browser. Try Chrome, Edge or Safari.");
      return;
    }
    recRef.current?.abort();
    setError(null);
    const rec = new Ctor();
    rec.lang = navigator.language || "en-US";
    // Phones restart recognition after each phrase; continuous mode repeats text on some of them.
    rec.continuous = !window.matchMedia("(pointer: coarse)").matches;
    rec.interimResults = true;
    rec.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) transcript += event.results[i][0].transcript;
      onText(transcript.trim());
    };
    rec.onerror = (event) => {
      if (event.error === "aborted") return;
      setError(ERRORS[event.error] ?? "Voice input stopped unexpectedly. Please try again.");
    };
    rec.onend = () => {
      if (recRef.current === rec) recRef.current = null;
      setListening(false);
    };
    recRef.current = rec;
    try {
      rec.start();
      setListening(true);
    } catch {
      recRef.current = null;
      setError("Voice input could not start. Please try again.");
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  useEffect(() => () => recRef.current?.abort(), []);

  return { supported, listening, error, start, stop, clearError };
}
