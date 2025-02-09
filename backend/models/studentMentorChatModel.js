import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const studentMentorChatModel = sequelize.define(
  "studentMentorChat",
  {
    chat_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "student",
        key: "student_id",
      },
      onDelete: "CASCADE",
    },
    mentor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "teacher",
        key: "teacher_id",
      },
      onDelete: "CASCADE",
    },
    chat: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      defaultValue: [],
  }},
  { tableName: "studentMentorChat", timestamps: false }
);

export default studentMentorChatModel;
