require("dotenv").config();

const { createCompletion } = require("./aiClient");

async function generateProposal(leadData) {
  console.log("🚀 Proposal Service Started");

  const prompt = `
You are a Senior Business Consultant.

Create a professional business proposal.

Return ONLY plain text.
Do NOT return JSON.
Do NOT use markdown code blocks.

Use the following structure:

========================================
PROJECT PROPOSAL
========================================

Client Name:
Company:
Project:

Executive Summary

Project Scope
- Item 1
- Item 2
- Item 3

Deliverables
- Deliverable 1
- Deliverable 2
- Deliverable 3

Estimated Timeline

Estimated Budget

Why Choose Us

Next Steps

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

Use the actual lead information above in the proposal.
Do NOT leave placeholders like [Client Name] or [Company Name].
Replace them with the provided values.
`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const completion = await createCompletion(
  [
    {
      role: "user",
      content: prompt,
    },
  ],
  0.3
);

      const content = completion.choices?.[0]?.message?.content;

      if (!content) {
        throw new Error("OpenRouter returned an empty proposal.");
      }

      console.log("✅ Proposal Generated");

      return content;

    } catch (error) {

      if (error.status === 503 && attempt < 3) {
        console.log(`🔄 Retry ${attempt}...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }

      console.error("❌ Proposal Error:", error);
      throw error;
    }
  }
}

module.exports = {
  generateProposal,
};