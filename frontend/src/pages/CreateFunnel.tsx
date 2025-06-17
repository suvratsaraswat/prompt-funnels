import { useState } from "react";
import axios from "axios";
import type { Funnel } from "../types/funnel";

export default function CreateFunnel() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<Funnel | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setError("");
      const res = await axios.post<{ funnel: Funnel }>("/api/funnel", { prompt });
      console.log("🟢 Funnel Response:", res.data.funnel);
      setResponse(res.data.funnel);
    } catch (err: unknown) {
      setResponse(null);
      setError("Something went wrong. Check the console.");
      console.error("❌ API Error:", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Create Your Funnel</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. Launch a course on productivity"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Funnel
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {response && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">{response.title}</h3>
          <ul className="list-disc pl-5 space-y-2">
            {response.steps.map((step, i) => (
              <li key={i}>
                <strong>{step.step}</strong>: {step.headline || step.offer || step.product || step.message}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
