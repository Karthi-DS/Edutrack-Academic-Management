import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const teacherProfileModel = sequelize.define(
  "teacherProfile",
  {
    teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile_no: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "department",
        key: "department_id",
      },
    },
    is_mentor:{
        type:DataTypes.BOOLEAN,
        allowNull:true,
        defaultValue:false
    },
    hod_id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            model:"hod",
            key:"hod_id"
        },
        onDelete:"SET NULL"
    },
  },
  { tableName: "teacherProfile", timestamps: false }
);

export default teacherProfileModel;