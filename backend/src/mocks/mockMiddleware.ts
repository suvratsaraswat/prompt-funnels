import { Request, Response, NextFunction } from "express";
import { mockFunnelResponses, fallbackFunnel } from "./openaiMockResponses";

export const mockOpenAIResponse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const USE_MOCK = process.env.USE_MOCK === "true";
  if (!USE_MOCK) return next();
  const userPrompt = req.body.prompt?.toLowerCase();

  if (!userPrompt) {
    return res.status(400).json({ error: "Prompt is required in mock mode." });
  }

  const matchedKey = Object.keys(mockFunnelResponses).find((key) =>
    userPrompt.includes(key)
  );

  if (matchedKey) {
    console.log(`🔁 Using mock response for: "${matchedKey}"`);
    return res.json({ funnel: mockFunnelResponses[matchedKey] });
  }

  console.log(
    `🧪 No exact match found. Using fallback funnel for: "${userPrompt}"`
  );
  return res.json({ funnel: fallbackFunnel });
};
