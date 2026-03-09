const Lesson = require("../models/Lesson");

exports.createLesson = async (req, res) => {
  try {

    const { title, description } = req.body;

    const lesson = new Lesson({
      title,
      description,
      mentor: req.user.id
    });

    await lesson.save();

    res.status(201).json({
      message: "Lesson created",
      lesson
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLessons = async (req, res) => {
  try {

    const lessons = await Lesson.find().populate("mentor", "name email");

    res.json(lessons);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};