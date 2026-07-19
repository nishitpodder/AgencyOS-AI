const { generateEmail } = require("../services/emailService");

const generateEmailController = async (req, res) => {
  console.log("===== Generate Email Request =====");
  console.log(req.body);

  try {
    console.log("Generating Email...");

    const email = await generateEmail({
  ...req.body.lead,
  analysis: req.body.analysis,
  proposal: req.body.proposal,
});

    console.log("Email Generated Successfully");

    res.json({
      success: true,
      email,
    });

  } catch (error) {
    console.error("Email Controller Error:");
      if (error.status === 429) {
    return res.status(429).json({
      success: false,
      message:
        "AI service quota exceeded. Please try again in a minute.",
    });
  }

    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Failed to generate email.",
      status: error.status || 500,
    });
  }
};

module.exports = {
  generateEmailController,
};