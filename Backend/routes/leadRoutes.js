const express = require("express");
const router = express.Router();

const {
  analyzeLeadController,
} = require("../controllers/leadController");

router.post("/analyze", analyzeLeadController);

module.exports = router;