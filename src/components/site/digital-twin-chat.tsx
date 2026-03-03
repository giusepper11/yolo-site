"use client";

import { FormEvent, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { ChatApiResponse } from "@/lib/ai/chat-contract";

type UiMessage = {
  role: "user" | "assistant";
  content: string;
  sources?: Array<{ label: string; href?: string }>;
};

export function DigitalTwinChat() {
  const [messages, setMessages] = useState<UiMessage[]>([
    {
      role: "assistant",
      content: "Ask me anything about Giuseppe's career journey, skills, and professional background.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("Chat ready.");

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = input.trim();
    if (!prompt || loading) {
      return;
    }

    const previousHistory = messages
      .filter((message) => message.role === "user" || message.role === "assistant")
      .map((message) => ({
        role: message.role,
        content: message.content,
      }));

    setLoading(true);
    setErrorText(null);
    setStatusMessage("Sending message...");
    setMessages((current) => [...current, { role: "user", content: prompt }]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: prompt,
          history: previousHistory.slice(-8),
        }),
      });

      const payload = (await response.json()) as ChatApiResponse & { error?: string; warnings?: string[] };

      if (!response.ok) {
        throw new Error(payload.error || "Unable to send message.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: payload.answer,
          sources: payload.sources,
        },
      ]);
      if (payload.warnings?.length) {
        setErrorText(payload.warnings.join(" "));
      }
      setStatusMessage("Response received.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error while sending message.";
      setErrorText(message);
      setStatusMessage("Error sending message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm leading-7 text-[var(--color-muted)]">
        This assistant is grounded in the profile data on this site and is limited to career and professional topics.
      </p>

      <div
        className="max-h-[26rem] space-y-3 overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-3"
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <article
            key={`${message.role}-${index.toString()}`}
            className={`rounded-lg border px-3 py-2 ${
              message.role === "assistant"
                ? "border-[var(--color-border)] bg-[var(--color-surface)]"
                : "border-[var(--color-accent)] bg-[color:color-mix(in_oklab,var(--color-accent)_10%,var(--color-surface))]"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
              {message.role === "assistant" ? "Digital Twin" : "You"}
            </p>
            {message.role === "assistant" ? (
              <div className="mt-2 text-sm leading-7 text-[var(--color-text)]">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children }) => (
                      <h2 className="mt-3 text-sm font-semibold tracking-wide text-[var(--color-text)]">{children}</h2>
                    ),
                    ul: ({ children }) => <ul className="mt-2 list-disc space-y-1 pl-5">{children}</ul>,
                    ol: ({ children }) => <ol className="mt-2 list-decimal space-y-1 pl-5">{children}</ol>,
                    li: ({ children }) => <li className="text-[var(--color-muted)]">{children}</li>,
                    p: ({ children }) => <p className="text-[var(--color-muted)]">{children}</p>,
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-[var(--color-accent)] underline-offset-4 hover:text-[var(--color-accent)]"
                      >
                        {children}
                      </a>
                    ),
                    code: ({ children }) => (
                      <code className="rounded bg-[var(--color-surface-2)] px-1 py-0.5 text-xs text-[var(--color-text)]">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            ) : (
              <p className="mt-1 text-sm leading-7 text-[var(--color-text)] whitespace-pre-wrap">{message.content}</p>
            )}
            {message.sources?.length ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {message.sources.map((source) => (
                  <a
                    key={`${source.label}-${source.href || "none"}`}
                    href={source.href || "#about"}
                    className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
                  >
                    Source: {source.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <form onSubmit={onSubmit} className="space-y-3" aria-label="Career digital twin chat form">
        <label htmlFor="career-chat-input" className="text-sm font-semibold text-[var(--color-text)]">
          Ask about experience, skills, achievements, or goals
        </label>
        <textarea
          id="career-chat-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          rows={3}
          maxLength={1200}
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-text)]"
          placeholder="Example: What strengths from your Glofox role are most relevant for a staff-level data engineering role?"
        />

        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-muted)]">{input.length.toString()}/1200</p>
          <button
            type="submit"
            disabled={!canSend}
            className="rounded-md bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-on-accent)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>

      <p className="sr-only" role="status" aria-live="polite">
        {statusMessage}
      </p>
      {errorText ? <p className="text-sm text-amber-300">{errorText}</p> : null}
    </div>
  );
}
