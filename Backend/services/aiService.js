require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

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
      const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: prompt,
      });

      console.log("✅ Gemini Response Received");
      console.log("===== GEMINI RESPONSE =====");
console.dir(response, { depth: null });

console.log("Type of response:", typeof response);

      return response.text;

    } catch (error) {

      if (error.status === 503 && attempt < 3) {
        console.log(`🔄 Retry ${attempt}...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }

      console.error("❌ Gemini Error:", error);
      throw error;
    }
  }
}

module.exports = {
  analyzeLead,
};