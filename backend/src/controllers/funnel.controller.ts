import { Request, Response } from "express";
import { generateFunnel } from "../services/openai.service";
import { Funnel } from "../models/funnel.model";

export async function createFunnel(req: Request, res: Response) {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const funnelSteps = await generateFunnel(prompt);

    const funnel = new Funnel({
      prompt,
      funnel: funnelSteps,
    });

    await funnel.save();

    res.json({ funnel: funnelSteps });
  } catch (error) {
    console.error("Error creating funnel:", error);
    res.status(500).json({ error: "Failed to create funnel" });
  }
}
