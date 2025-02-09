import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const academicSubjectModel = sequelize.define(
  "academicSubject",
  {
    subject_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    code:{
      type:DataTypes.STRING(50),
      allowNull:false
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
  },
  { tableName: "academicSubject", timestamps: false }
);

export default academicSubjectModel;