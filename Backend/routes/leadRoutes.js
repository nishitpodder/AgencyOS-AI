const express = require("express");

const router = express.Router();

router.post("/analyze", (req, res) => {
  console.log("Lead Received:");
  console.log(req.body);

  res.json({
    success: true,
    leadScore: 92,
    priority: "Hot Lead",
    message: "Lead analyzed successfully."
  });
});

module.exports = router;