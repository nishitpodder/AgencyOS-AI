const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leadRoutes");
const proposalRoutes = require("./routes/proposalRoutes");
const emailRoutes = require("./routes/emailRoutes");
const pdfRoutes = require("./routes/pdfRoutes");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes);
app.use("/api/proposal", proposalRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/pdf", pdfRoutes);
// Health Check
app.get("/", (req, res) => {
  res.send("🚀 AgencyOS AI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});