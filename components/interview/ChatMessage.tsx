"use client";

import type { UIMessage } from "ai";
import Markdown from "react-markdown";

interface ChatMessageProps {
  message: UIMessage;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  const text = message.parts
    .filter(
      (part): part is Extract<typeof part, { type: "text" }> =>
        part.type === "text",
    )
    .map((part) => part.text)
    .join("");

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-sm px-5 py-4 ${
          isUser
            ? "bg-accent/10 border border-accent/20"
            : "bg-[#171714] border border-[#2a2a26]"
        }`}
      >
        <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
          {isUser ? "Du" : "Intervjuare"}
        </span>
        {isUser ? (
          <div className="text-foreground/90 leading-relaxed text-sm whitespace-pre-wrap">
            {text}
          </div>
        ) : (
          <Markdown
            components={{
              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  {children}
                </a>
              ),
              strong: ({ children }) => (
                <strong className="text-foreground font-semibold">
                  {children}
                </strong>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-1 my-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-1 my-2">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-foreground/90">{children}</li>
              ),
              h2: ({ children }) => (
                <h2 className="font-serif text-lg text-foreground mt-4 mb-2">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-4 mb-2">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-foreground/90 leading-relaxed text-sm mb-2 last:mb-0">
                  {children}
                </p>
              ),
              code: ({ children }) => (
                <code className="font-mono text-[12px] bg-[#0f0f0d] px-1.5 py-0.5 rounded-sm text-accent">
                  {children}
                </code>
              ),
              hr: () => <hr className="border-[#2a2a26] my-4" />,
            }}
          >
            {text}
          </Markdown>
        )}
      </div>
    </div>
  );
}
