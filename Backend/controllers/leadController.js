const { analyzeLead } = require("../services/aiService");

const analyzeLeadController = async (req, res) => {
  console.log("===== New Request =====");
  console.log(req.body);

  try {
    console.log("Calling OpenRouter...");

    const result = await analyzeLead(req.body);

    console.log("OpenRouter returned:");
    console.log(result);

   // Parse OpenRouter JSON response
let parsedResult;

try {
  let cleaned = result.trim();

  // Remove Markdown code fences if the model returns them
  cleaned = cleaned.replace(/^```json\s*/i, "");
  cleaned = cleaned.replace(/^```\s*/i, "");
  cleaned = cleaned.replace(/```$/, "");

  parsedResult = JSON.parse(cleaned);

} catch (parseError) {
  console.error("JSON Parse Error:", parseError);
  console.error("AI Response:", result);

  return res.status(500).json({
    success: false,
    message: "AI returned invalid JSON.",
  });
}

    res.json({
      success: true,
      result: parsedResult,
    });

  } catch (error) {
    console.error("===== CONTROLLER ERROR =====");
console.error(error);

if (error.stack) {
  console.error(error.stack);
}

    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Unknown error",
      status: error.status || 500,
    });
  }
};

module.exports = {
  analyzeLeadController,
};