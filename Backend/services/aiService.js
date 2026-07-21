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
const MODELS = [
  "google/gemma-4-31b-it:free",
  "google/gemma-4-26b-a4b-it:free",
  "poolside/laguna-xs-2.1:free"
];
async function createCompletionWithRetry(prompt) {
  let lastError;

  for (const model of MODELS) {
    console.log(`Trying model: ${model}`);

    try {
      const completion = await client.chat.completions.create({
        model,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
      });

      console.log(`Success with ${model}`);
      return completion;

    } catch (err) {
      lastError = err;

      console.log(`Failed with ${model}`);

      if (err.status !== 429) {
        throw err;
      }

      console.log("Trying next model...");
    }
  }

  throw lastError;
}
 async function analyzeLead(leadData) {
  
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
Return an integer leadScore between 0 and 100.

Scoring Guide:
100 = Excellent opportunity
75 = Strong opportunity
50 = Average opportunity
25 = Weak opportunity
0 = Not a viable lead

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
      const completion = await createCompletionWithRetry(prompt);

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
}   // <-- Add this closing brace

module.exports = {
  analyzeLead,
};