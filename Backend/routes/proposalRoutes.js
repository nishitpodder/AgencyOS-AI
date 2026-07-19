const express = require("express");
const {
  generateProposalController,
} = require("../controllers/proposalController");

const router = express.Router();

// Generate AI Proposal
router.post("/generate", generateProposalController);

module.exports = router;