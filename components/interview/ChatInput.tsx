"use client";

import { useRef } from "react";

interface ChatInputProps {
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
  onStop: () => void;
  isLoading: boolean;
}

export default function ChatInput({
  input,
  onInputChange,
  onSend,
  onStop,
  isLoading,
}: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isLoading) {
          onStop();
        } else if (input.trim()) {
          onSend();
        }
        inputRef.current?.focus();
      }}
      className="flex gap-3"
    >
      <input
        ref={(el) => {
          inputRef.current = el;
          if (el && !isLoading) {
            el.focus();
          }
        }}
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Skriv ditt svar..."
        disabled={isLoading}
        className="flex-1 bg-[#171714] border border-[#2a2a26] text-foreground placeholder:text-muted font-sans text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-muted transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        className={`font-mono text-[11px] tracking-wide px-5 py-3 rounded-sm transition-colors cursor-pointer ${
          isLoading
            ? "bg-red-500/80 text-white hover:bg-red-500"
            : "bg-accent text-background hover:bg-accent/80"
        } disabled:opacity-30 disabled:cursor-not-allowed`}
        disabled={!isLoading && !input.trim()}
      >
        {isLoading ? "Stopp" : "Skicka"}
      </button>
    </form>
  );
}
