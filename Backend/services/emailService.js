require("dotenv").config();

const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function generateEmail(leadData) {
  console.log("🚀 Email Service Started");

  const prompt = `
You are a Senior Sales Consultant.

Write a personalized follow-up email for the client.

Return ONLY the email.

Lead Information

Client Name: ${leadData.clientName}
Company: ${leadData.company}
Email: ${leadData.email}
Project Type: ${leadData.projectType}
Budget: ${leadData.budget}
Requirements: ${leadData.requirements}

Lead Analysis

Lead Score: ${leadData.analysis?.leadScore}
Priority: ${leadData.analysis?.priority}
Risk: ${leadData.analysis?.risk}
Budget Fit: ${leadData.analysis?.budgetFit}
Estimated Value: ${leadData.analysis?.estimatedValue}
Recommendation: ${leadData.analysis?.recommendation}

Proposal

${leadData.proposal}

Instructions

- Write a professional business email.
- Include a subject line.
- Thank the client for their inquiry.
- Mention that a proposal has been prepared.
- Reference the client's business goals.
- Invite them to schedule a discovery call.
- End with a professional closing.
- Return plain text only.
`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const completion = await client.chat.completions.create({
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
        throw new Error("OpenRouter returned an empty email.");
      }

      console.log("✅ Email Generated");

      return content;

    } catch (error) {

      if (error.status === 503 && attempt < 3) {
        console.log(`🔄 Retry ${attempt}...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }

      console.error("❌ Email Error:", error);
      throw error;
    }
  }
}

module.exports = {
  generateEmail,
};