import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {

  // Register new provider with models
  pi.registerProvider("chutes", {
    baseUrl: "https://llm.chutes.ai/v1",
    apiKey: "CHUTES_API_KEY",
    api: "openai-completions",
    models: [
      {
        id: "moonshotai/Kimi-K2.5-TEE",
        name: "KIMI K2.5 (TEE)",
        reasoning: true,
        input: ["text", "image"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 262144,
        maxTokens: 65535
      },
      {
        id: "zai-org/GLM-4.6-TEE",
        name: "GLM 4.6 (TEE)",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 202752,
        maxTokens: 65535
      }
    ]
  });
}
