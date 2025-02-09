import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const hodNotificationModel = sequelize.define(
  "hodNotification",
  {
    notifiction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sender: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "hod",
        key: "hod_id",
      },
    },
    teacher_id: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
      references: {
        model: "teacherProfile",
        key: "teacher_id",
      },
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "department",
        key: "department_id",
      },
      onDelete: "SET NULL",
    },
  },
  { tableName: "hodNotification", timestamps: false }
);
