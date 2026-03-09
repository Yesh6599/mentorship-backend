const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {

    const { studentId, lessonId, date } = req.body;

    const booking = new Booking({
      studentId,
      lessonId,
      date
    });

    await booking.save();

    res.status(201).json({
      message: "Lesson booked successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate("studentId")
      .populate("lessonId");

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};