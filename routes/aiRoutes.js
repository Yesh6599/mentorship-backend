const express = require("express");
const router = express.Router();
const { summarizeText } = require("../controllers/aiController");

// Test route to confirm routes are loaded
router.get("/test", (req, res) => {
  res.send("AI route working");
});

// POST /api/ai/summarize
router.post("/summarize", summarizeText);

module.exports = router;