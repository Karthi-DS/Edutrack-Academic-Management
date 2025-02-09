import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const studentAttendanceModel = sequelize.define(
  "studentAttendance",
  {
    student_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      references: {
        model: "student",
        key: "student_id",
      },
      onDelete: "CASCADE",
    },
    department_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: "department",
        key: "department_id",
      },
      onDelete: "CASCADE",
    },
    attendance: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      defaultValue:[]
    },
  },
  { tableName: "studentAttendance", timestamps: false }
);
