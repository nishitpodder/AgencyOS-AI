const { analyzeLead } = require("../services/aiService");

const analyzeLeadController = async (req, res) => {
  console.log("===== New Request =====");
  console.log(req.body);

  try {
    console.log("Calling Gemini...");

    const result = await analyzeLead(req.body);

    console.log("Gemini returned:");
    console.log(result);

    // Parse Gemini JSON response
    let parsedResult;

    try {
      parsedResult = JSON.parse(result);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);

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
    console.error("Controller Error:");
    console.error(error);

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