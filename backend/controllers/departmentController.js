import departmentModel from "../models/departmentModel.js";

const getAllDepartments = async (req, res) => {
  try {
    const department = await departmentModel.findAll();
    res.json({
      message: "Department data retrieved succesfully",
      data: department,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getDepartmentById = async (req, res) => {
  try {
    const department = await departmentModel.findByPk(req.params.id);
    res.json({
      message: "Department data retrieved succesfully",
      data: department,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createDepartment = async (req, res) => {
  try {
    const department = await departmentModel.create(req.body);
    res.json({
      message: "Department data created successfully",
      data: department,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const department = await departmentModel.update(req.body, {
      where: { department_id: req.params.id },
    });
    res.json({ message: "Department data updated successfully" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export { getAllDepartments, getDepartmentById, createDepartment, updateDepartment };