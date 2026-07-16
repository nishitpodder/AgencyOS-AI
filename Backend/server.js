const express = require("express");
const cors = require("cors");
require("dotenv").config();
const leadRoutes = require("./routes/leadRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/leads", leadRoutes);
app.get("/", (req, res) => {
  res.send("🚀 AgencyOS AI Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});