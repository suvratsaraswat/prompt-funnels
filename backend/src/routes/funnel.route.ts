import { Router } from "express";
import { createFunnel } from "../controllers/funnel.controller";
import { mockOpenAIResponse } from "../mocks/mockMiddleware"; // 👈 Import mock middleware

const router = Router();

// 🧪 Apply mock middleware only to this POST route
router.post("/funnel", mockOpenAIResponse, createFunnel);

export default router;
