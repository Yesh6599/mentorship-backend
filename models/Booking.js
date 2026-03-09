const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  lessonId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
    required: true
  },
  date: {
    type: String
  }
});

module.exports = mongoose.model("Booking", bookingSchema);