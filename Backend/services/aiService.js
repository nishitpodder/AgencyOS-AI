require("dotenv").config();

if (!process.env.OPENROUTER_MODEL) {
  throw new Error("OPENROUTER_MODEL environment variable is missing.");
}

if (!process.env.OPENROUTER_API_KEY) {
  throw new Error("OPENROUTER_API_KEY environment variable is missing.");
}

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000",
    "X-Title": "AgencyOS-AI",
  },
});

async function analyzeLead(leadData) {async function createCompletionWithRetry(request, maxRetries = 3) {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await client.chat.completions.create(request);
    } catch (err) {
      lastError = err;

      if (err.status !== 429 || attempt === maxRetries) {
        throw err;
      }

      const delay = 1000 * Math.pow(2, attempt - 1);
      console.log(`Rate limited. Retrying in ${delay} ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}
  console.log("🚀 AI Service Started");

  const prompt = `
You are a senior Business Consultant.

Analyze the lead below and return ONLY valid JSON.

Do NOT use markdown.
Do NOT use code blocks.
Do NOT write explanations.
Return JSON only.

Required JSON format:

{
  "leadScore": 0,
  "priority": "",
  "risk": "",
  "budgetFit": "",
  "estimatedValue": "",
  "summary": "",
  "recommendation": ""
}

Lead Information:

Client Name: ${leadData.clientName}
Company: ${leadData.company}
Email: ${leadData.email}
Project Type: ${leadData.projectType}
Budget: ${leadData.budget}
Requirements: ${leadData.requirements}
`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const completion = await createCompletionWithRetry({
  model: process.env.OPENROUTER_MODEL,
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
  temperature: 0.3,
});

const content = completion.choices?.[0]?.message?.content;

if (!content) {
  throw new Error("OpenRouter returned an empty response.");
}

return content;

    } catch (error) {

      if (error.status === 503 && attempt < 3) {
        console.log(`🔄 Retry ${attempt}...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }

      console.error("❌ OpenRouter Error:", error);
      throw error;
    }
  }
}

module.exports = {
  analyzeLead,
};