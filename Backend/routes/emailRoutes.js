const express = require("express");

const {
  generateEmailController,
} = require("../controllers/emailController");

const router = express.Router();

router.post("/generate", generateEmailController);

module.exports = router;