import { NextResponse } from "next/server";

import { chatRequestSchema, type ChatApiResponse } from "@/lib/ai/chat-contract";
import {
  buildDigitalTwinContext,
  getCareerScopeBoundaryResponse,
  inferSourceHints,
  isCareerScopedQuestion,
} from "@/lib/ai/digital-twin";
import { MissingEnvironmentError, getOllamaCloudConfig } from "@/lib/ai/env";
import { OllamaCloudRequestError, sendOllamaCloudChat } from "@/lib/ai/ollama-cloud";

export function buildSystemPrompt(contextPayload: string): string {
  return [
    "You are a career digital twin for Giuseppe Rosa.",
    "You must answer ONLY professional/career questions grounded in the provided context.",
    "If a fact is unavailable, clearly say you do not have that information.",
    "Do not invent employers, dates, credentials, or project outcomes.",
    "Return polished Markdown only. Do not use any raw HTML tags.",
    "Keep answers concise, practical, and easy to scan.",
    "Use this exact structure:",
    "## Summary",
    "- 1-2 short sentences.",
    "## Key Strengths",
    "- 3 to 5 bullets.",
    "## Evidence from Experience",
    "- 2 to 4 bullets referencing company/role from context.",
    "## Suggested Positioning",
    "- 1 to 3 bullets with professional positioning guidance.",
    "## Sources",
    "- Mention relevant source sections by name (About, Career Journey, Skills and Credentials, Contact).",
    "",
    "DIGITAL_TWIN_CONTEXT_JSON:",
    contextPayload,
  ].join("\n");
}

export async function POST(request: Request) {
  let requestJson: unknown;

  try {
    requestJson = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsedRequest = chatRequestSchema.safeParse(requestJson);
  if (!parsedRequest.success) {
    return NextResponse.json(
      { error: "Invalid request payload.", details: parsedRequest.error.flatten() },
      { status: 400 },
    );
  }

  const { message, history = [] } = parsedRequest.data;
  const trimmedMessage = message.trim();
  const sourceHints = inferSourceHints(trimmedMessage);

  if (!isCareerScopedQuestion(trimmedMessage)) {
    const boundaryResponse: ChatApiResponse = {
      answer: getCareerScopeBoundaryResponse(),
      sources: sourceHints,
      warnings: ["Question appears out of scope for this career digital twin."],
    };
    return NextResponse.json(boundaryResponse);
  }

  try {
    const config = getOllamaCloudConfig();
    if (trimmedMessage.length > config.maxInputChars) {
      return NextResponse.json(
        {
          error: `Message too long. Maximum supported length is ${config.maxInputChars.toString()} characters.`,
        },
        { status: 400 },
      );
    }

    const systemPrompt = buildSystemPrompt(buildDigitalTwinContext(config.maxContextChars));
    const normalizedHistory = history.slice(-8).map((entry) => ({
      role: entry.role,
      content: entry.content,
    }));

    const providerResponse = await sendOllamaCloudChat({
      messages: [
        { role: "system", content: systemPrompt },
        ...normalizedHistory,
        { role: "user", content: trimmedMessage },
      ],
      userId: "career-digital-twin-web",
    });

    const response: ChatApiResponse = {
      answer: providerResponse.answer,
      sources: sourceHints,
      warnings: [],
    };

    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof MissingEnvironmentError) {
      return NextResponse.json(
        {
          error: "Chat is not configured. Set OLLAMA_API_KEY in project-root .env and retry.",
        },
        { status: 500 },
      );
    }

    if (error instanceof OllamaCloudRequestError) {
      return NextResponse.json(
        {
          error: error.message,
          warnings: ["Ollama Cloud request failed. You can retry or update OLLAMA_MODEL/OLLAMA_TIMEOUT_MS."],
        },
        { status: error.status },
      );
    }

    return NextResponse.json({ error: "Unexpected chat error." }, { status: 500 });
  }
}
