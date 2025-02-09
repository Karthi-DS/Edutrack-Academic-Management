import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const studentTimetableModel = sequelize.define(
  "studentTimetable",
  {
    timetable_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "department",
        key: "department_id",
      },
      onDelete: "CASCADE",
    },
    timetable: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue:[]
    },
  },
  { tableName: "studentTimetable", timestamps: false }
);

export default studentTimetableModel;
