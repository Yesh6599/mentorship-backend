const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  mentor: {
    type: String,
    required: true
  },
  duration: {
    type: Number
  }
});

module.exports = mongoose.model("Lesson", lessonSchema);