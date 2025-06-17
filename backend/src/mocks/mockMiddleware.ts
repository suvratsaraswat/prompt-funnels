import dotenv from "dotenv";
dotenv.config(); // ✅ Add this here

import { Request, Response, NextFunction } from "express";
import { mockFunnelResponses, fallbackFunnel } from "./openaiMockResponses";

const USE_MOCK = process.env.USE_MOCK === "true";
console.log("Use Mock: ", USE_MOCK);

export const mockOpenAIResponse = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("🧪 mockMiddleware is running");
  console.log("🧠 req.body:", req.body);
  console.log("Use Mock: ", USE_MOCK);
  if (!USE_MOCK) return next();
  console.log("🧠 req.body:", req.body);
  const userPrompt = req.body.prompt?.toLowerCase();
  console.log("🧠 Received Prompt:", userPrompt);
  console.log("🧠 Received Prompt:", userPrompt);
  console.log("🧠 Available keys:", Object.keys(mockFunnelResponses));

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
