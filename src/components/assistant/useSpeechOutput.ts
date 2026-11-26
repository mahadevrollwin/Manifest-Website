"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const PREF_KEY = "manifest-ai-voice-replies";
const MAX_CHUNK = 200; // Chrome stops long utterances after ~15 seconds, so speech is queued in short chunks.

const noopSubscribe = () => () => {};
const hasSynthesis = () =>
  typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";

/** Turns a markdown answer into plain text that sounds natural when read aloud. */
export function toSpeakable(markdown: string) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, " ")
    .split("\n")
    .filter((line) => !/^\s*\*{0,2}related:/i.test(line))
    .map((line) => {
      const isItem = /^\s*([-*•]|\d+[.)])\s+/.test(line);
      const text = line.replace(/^\s*([-*•]|\d+[.)])\s+/, "").trim();
      return isItem && text && !/[.!?:]$/.test(text) ? `${text}.` : text;
    })
    .join("\n")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[*_`#>]/g, "")
    .replace(/\s*·\s*/g, ", ")
    .replace(/\n+/g, ". ")
    .replace(/([.!?:,])\s*\./g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function splitChunks(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+["')\]]?\s*|[^.!?]+$/g) ?? [text];
  const chunks: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    if (current && current.length + sentence.length > MAX_CHUNK) {
      chunks.push(current.trim());
      current = "";
    }
    current += sentence;
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

function pickVoice(lang: string) {
  const voices = window.speechSynthesis.getVoices();
  const base = lang.split("-")[0].toLowerCase();
  const matching = voices.filter((v) => v.lang.toLowerCase().startsWith(base));
  const pool = matching.length ? matching : voices;
  const score = (v: SpeechSynthesisVoice) =>
    (v.lang.toLowerCase() === lang.toLowerCase() ? 4 : 0) +
    (/natural|neural|online|premium|enhanced|google|samantha|daniel|serena|aria|jenny/i.test(v.name) ? 3 : 0) +
    (v.localService ? 0 : 1);
  return [...pool].sort((a, b) => score(b) - score(a))[0] ?? null;
}

/** Text-to-speech using the browser's SpeechSynthesis API, with a queue so a streamed answer can be spoken sentence by sentence. */
export function useSpeechOutput() {
  const supported = useSyncExternalStore(noopSubscribe, hasSynthesis, () => false);
  const [enabled, setEnabledState] = useState(true);
  const [speaking, setSpeaking] = useState(false);

  const enabledRef = useRef(true);
  const pendingRef = useRef(0);
  const generationRef = useRef(0);
  const idleRef = useRef<(() => void)[]>([]);
  const unlockedRef = useRef(false);

  // Restore the saved preference (voice replies are on by default).
  useEffect(() => {
    queueMicrotask(() => {
      try {
        const saved = localStorage.getItem(PREF_KEY);
        if (saved === "off") {
          enabledRef.current = false;
          setEnabledState(false);
        }
      } catch {
        // storage blocked
      }
    });
  }, []);

  // Voices load asynchronously in Chrome; asking early makes sure they are ready when needed.
  useEffect(() => {
    if (!hasSynthesis()) return;
    const synth = window.speechSynthesis;
    synth.getVoices();
    return () => synth.cancel();
  }, []);

  const runIdle = useCallback(() => {
    const callbacks = idleRef.current;
    idleRef.current = [];
    callbacks.forEach((cb) => cb());
  }, []);

  const cancel = useCallback(() => {
    generationRef.current += 1;
    pendingRef.current = 0;
    idleRef.current = [];
    if (hasSynthesis()) window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  /** Mobile browsers only allow speech after a tap; call this from a click handler to unlock it. */
  const unlock = useCallback(() => {
    if (unlockedRef.current || !hasSynthesis()) return;
    unlockedRef.current = true;
    const silent = new SpeechSynthesisUtterance(" ");
    silent.volume = 0;
    window.speechSynthesis.speak(silent);
  }, []);

  const speak = useCallback(
    (markdown: string, force = false) => {
      if (!hasSynthesis() || (!enabledRef.current && !force)) return;
      const plain = toSpeakable(markdown);
      if (!plain) return;
      const synth = window.speechSynthesis;
      const generation = generationRef.current;
      const lang = /^en/i.test(navigator.language) ? navigator.language : "en-US";
      const voice = pickVoice(lang);

      for (const chunk of splitChunks(plain)) {
        const utterance = new SpeechSynthesisUtterance(chunk);
        utterance.lang = voice?.lang ?? lang;
        if (voice) utterance.voice = voice;
        utterance.rate = 1;
        utterance.pitch = 1;

        const state: { finished: boolean; watchdog?: ReturnType<typeof setTimeout> } = { finished: false };
        const done = () => {
          if (state.finished) return;
          state.finished = true;
          clearTimeout(state.watchdog);
          if (generation !== generationRef.current) return; // cancelled meanwhile
          pendingRef.current = Math.max(0, pendingRef.current - 1);
          if (pendingRef.current === 0) {
            setSpeaking(false);
            runIdle();
          }
        };
        utterance.onend = done;
        utterance.onerror = done;
        // Some browsers never fire `end`; do not let the conversation hang.
        state.watchdog = setTimeout(done, 4000 + chunk.length * 110);

        pendingRef.current += 1;
        setSpeaking(true);
        synth.speak(utterance);
      }
    },
    [runIdle],
  );

  /** Runs `callback` once everything queued has been spoken (immediately if nothing is playing). */
  const whenIdle = useCallback((callback: () => void) => {
    if (pendingRef.current === 0) callback();
    else idleRef.current.push(callback);
  }, []);

  const setEnabled = useCallback(
    (value: boolean) => {
      enabledRef.current = value;
      setEnabledState(value);
      try {
        localStorage.setItem(PREF_KEY, value ? "on" : "off");
      } catch {
        // storage blocked
      }
      if (!value) cancel();
    },
    [cancel],
  );

  return { supported, enabled, speaking, speak, cancel, unlock, whenIdle, setEnabled };
}
