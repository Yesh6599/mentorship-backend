const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const bookingRoutes = require("./routes/bookingRoutes"); 
const sessionRoutes = require("./routes/sessionRoutes");
const aiRoutes = require("./routes/aiRoutes.js"); 

const authMiddleware = require("./middleware/authMiddleware");

// Rate limiter for LLM endpoint
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/sessions", sessionRoutes);

// LLM route (assignment requirement)
app.use("/llm", limiter, aiRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mentorship")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Mentorship Backend API Running");
});

app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});