import { describe, expect, it } from "vitest";

import { buildSystemPrompt } from "@/app/api/chat/route";

describe("chat system prompt", () => {
  it("includes professional markdown formatting rules and grounding constraints", () => {
    const prompt = buildSystemPrompt('{"identity":{"name":"Giuseppe Rosa"}}');

    expect(prompt).toContain("Return polished Markdown only. Do not use any raw HTML tags.");
    expect(prompt).toContain("## Summary");
    expect(prompt).toContain("## Key Strengths");
    expect(prompt).toContain("## Evidence from Experience");
    expect(prompt).toContain("## Suggested Positioning");
    expect(prompt).toContain("## Sources");
    expect(prompt).toContain("You must answer ONLY professional/career questions grounded in the provided context.");
    expect(prompt).toContain("If a fact is unavailable, clearly say you do not have that information.");
  });
});
