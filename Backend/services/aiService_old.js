require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function analyzeLead(leadData) {
  const prompt = `
Analyze this sales lead.

Client: ${leadData.clientName}
Company: ${leadData.company}
Project: ${leadData.projectType}
Budget: ${leadData.budget}
Requirements: ${leadData.requirements}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = { analyzeLead };