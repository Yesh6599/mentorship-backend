const Session = require("../models/sessionModel"); // we'll create this model

// Create a new session (Mentor only)
exports.createSession = async (req, res) => {
  try {
    const { lessonId, date, topic, summary } = req.body;

    if (!lessonId || !date || !topic || !summary) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const session = await Session.create({
      lessonId,
      date,
      topic,
      summary
    });

    res.status(201).json(session);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create session" });
  }
};

// Get sessions by lesson
exports.getSessionsByLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;

    const sessions = await Session.find({ lessonId });

    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch sessions" });
  }
};