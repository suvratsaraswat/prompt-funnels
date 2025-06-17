import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import funnelRoutes from "./routes/funnel.route";

dotenv.config();

console.log('🧩 Loaded OPENAI_API_KEY:', process.env.OPENAI_API_KEY?.slice(0, 10) + '...');

const app = express();
app.use(cors());
// Add after app.use(cors());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
app.use(express.json());

app.use("/api", funnelRoutes); // Add this

app.get("/", (req, res) => {
  res.send("Prompt Funnels Backend is Running");
});

export default app;
