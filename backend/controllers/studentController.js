import studentModel from "../models/studentModel.js";

const getAllStudents = async (req, res) => {
  try {
    const student = await studentModel.findAll();
    res.json({ message: "Student data retrieved succesfully", data: student });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await studentModel.findByPk(req.params.id);
    res.json({ message: "Student data retrieved succesfully", data: student });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await studentModel.create(req.body);
    res.json({ message: "Student data created successfully", data: student });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await studentModel.update(req.body, {
      where: { student_id: req.params.id },
    });
    if (student[0] === 0) {
      res.json({ message: "Invalid student id" });
      return;
    } else {
      const updatedStudent = await studentModel.findByPk(req.params.id);
      res.json({
        message: "Student data updated successfully",
        data: updatedStudent,
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await studentModel.destroy({
      where: { student_id: req.params.id },
    });
    res.json({ message: "Student data deleted successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
