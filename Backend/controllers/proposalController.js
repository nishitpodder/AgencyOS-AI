const { generateProposal } = require("../services/proposalService");

const generateProposalController = async (req, res) => {
  console.log("===== Generate Proposal Request =====");
  console.log(req.body);

  try {
    console.log("Generating Proposal...");

    const proposal = await generateProposal({
  ...req.body.lead,
  analysis: req.body.analysis,
});

    console.log("Proposal Generated Successfully");

    res.json({
      success: true,
      proposal,
    });

  } catch (error) {
    console.error("Proposal Controller Error:");
    console.error(error);

    res.status(error.status || 500).json({
      success: false,
      message: error.message || "Failed to generate proposal.",
      status: error.status || 500,
    });
  }
};

module.exports = {
  generateProposalController,
};