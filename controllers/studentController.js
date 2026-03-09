const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  try {

    const { name, email, interest } = req.body;

    const student = new Student({
      name,
      email,
      interest
    });

    await student.save();

    res.status(201).json({
      message: "Student created",
      student
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {

    const students = await Student.find();

    res.json(students);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};