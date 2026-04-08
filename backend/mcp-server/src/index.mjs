import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: "../../.env" });

const app = express();
app.use(express.json());

const parseWithOpenRouter = async (text) => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;
  const model = process.env.PARSER_MODEL ?? "openrouter/auto";
  const prompt = `Extract structured order data from the message. Return JSON only with keys: customer_name, items (array of {product, qty}), priority (urgent|high|normal), notes, confidence (0-1). Message: ${text}`;
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "http://localhost",
      "X-Title": "DispatchBoard"
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: "You are a strict JSON extractor." },
        { role: "user", content: prompt }
      ]
    })
  });
  if (!res.ok) return null;
  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) return null;
  try {
    return JSON.parse(content);
  } catch {
    return null;
  }
};

app.post("/parse", async (req, res) => {
  const text = String(req.body?.text ?? "");
  const parsed = await parseWithOpenRouter(text);
  if (!parsed) {
    return res.status(400).json({ error: "Parser failed." });
  }
  res.json(parsed);
});

const port = Number(process.env.MCP_PORT ?? 3010);
app.listen(port, () => {
  console.log(`MCP parser server running on ${port}`);
});
