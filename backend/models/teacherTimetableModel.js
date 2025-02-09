import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const teacherTimetableModel = sequelize.define(
  "teacherTimetable",
  {
    timetable_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    teacher_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "teacher",
        key: "teacher_id",
      },
      onDelete: "CASCADE",
    },
    timetable: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
  },
  { tableName: "teacherTimetable", timestamps: false }
);

export default teacherTimetableModel;
