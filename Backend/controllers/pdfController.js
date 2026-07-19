const { generateProposalPDF } = require("../services/pdfService");

const generatePDF = async (req, res) => {
  try {
    const { proposal } = req.body;

    if (!proposal) {
      return res.status(400).json({
        success: false,
        message: "Proposal is required.",
      });
    }

    const pdfBuffer = await generateProposalPDF(proposal);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="AgencyOS-Proposal.pdf"'
    );

    res.send(pdfBuffer);
  } catch (error) {
    console.error("PDF Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate PDF.",
    });
  }
};

module.exports = {
  generatePDF,
};