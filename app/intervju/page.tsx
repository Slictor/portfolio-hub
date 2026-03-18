"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState } from "react";
import ChatInput from "@/components/interview/ChatInput";
import ChatMessage from "@/components/interview/ChatMessage";
import InterviewHero from "@/components/interview/InterviewHero";
import LevelToggle from "@/components/interview/LevelToggle";
import TopicSelector from "@/components/interview/TopicSelector";
import type { InterviewLevel, InterviewTopic } from "@/types/interview";
import { LEVEL_LABELS, TOPIC_LABELS } from "@/types/interview";

export default function InterviewPage() {
  const [level, setLevel] = useState<InterviewLevel>("junior");
  const [topic, setTopic] = useState<InterviewTopic>("general");
  const [questionCount, setQuestionCount] = useState(10);
  const [started, setStarted] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, setMessages, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  useEffect(() => {
    // Reference triggers so biome recognizes the dependencies
    void messages.length;
    void status;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, status]);

  const handleStart = () => {
    setStarted(true);
    sendMessage({ text: "Starta intervjun" }, { body: { level, topic, questionCount } });
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input;
    setInput("");
    sendMessage({ text }, { body: { level, topic, questionCount } });
  };

  const handleReset = () => {
    setStarted(false);
    setInput("");
    setMessages([]);
  };

  // Config screen
  if (!started) {
    return (
      <main className="min-h-screen bg-background">
        <InterviewHero sessionCount={0} />

        <div className="max-w-3xl mx-auto px-6 pb-20">
          <div className="mb-8">
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">Svårighetsgrad</h3>
            <LevelToggle
              value={level}
              onChange={setLevel}
            />
          </div>

          <div className="mb-8">
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">Ämne</h3>
            <TopicSelector
              value={topic}
              onChange={setTopic}
            />
          </div>

          <div className="mb-10">
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3">Antal frågor</h3>
            <div className="inline-flex gap-0 border border-[#2a2a26] rounded-sm overflow-hidden">
              {[5, 10, 15].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setQuestionCount(count)}
                  className={`font-mono text-[11px] tracking-wide px-4 py-2 transition-colors cursor-pointer ${
                    questionCount === count ? "bg-accent text-background" : "text-muted hover:text-foreground"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="font-mono text-sm tracking-wide px-6 py-3 bg-[#CAFF4D] text-background rounded-sm hover:bg-[#b8e644] transition-colors cursor-pointer"
          >
            Starta intervju →
          </button>
        </div>
      </main>
    );
  }

  // Chat screen
  return (
    <main className="min-h-screen bg-background pt-24 pb-4 flex flex-col">
      {/* Top bar */}
      <div className="px-6 pb-4 border-b border-[#2a2a26]">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-xl text-foreground">Intervjuträning</h1>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
              {LEVEL_LABELS[level]} · {TOPIC_LABELS[topic]} · {questionCount} frågor
            </span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="font-mono text-[11px] tracking-wide px-4 py-1.5 bg-[#2a2a26] text-foreground hover:bg-accent hover:text-background transition-colors rounded-sm cursor-pointer"
          >
            Ny intervju
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages
            .filter((m) => !(m.role === "user" && messages.indexOf(m) === 0))
            .map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}
          {status === "submitted" && (
            <div className="flex justify-start">
              <div className="bg-[#171714] border border-[#2a2a26] rounded-sm px-5 py-4">
                <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                  Intervjuare
                </span>
                <span className="text-muted text-sm animate-pulse">Skriver...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="px-6 pt-4 border-t border-[#2a2a26]">
        <div className="max-w-3xl mx-auto">
          <ChatInput
            input={input}
            onInputChange={setInput}
            onSend={handleSend}
            onStop={stop}
            isLoading={status === "submitted" || status === "streaming"}
          />
        </div>
      </div>
    </main>
  );
}
