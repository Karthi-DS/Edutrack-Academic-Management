import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const teacherAttendanceModel = sequelize.define(
  "teacherAttendance",
  {
    teacher_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        references:{
            model:"teacher",
            key:"teacher_id"
        },
        onDelete:"CASCADE"
    },
    department_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        references:{
            model:"department",
            key:"department_id"
        },
        onDelete:"CASCADE"
    },
    attendance:{
        type:DataTypes.ARRAY(DataTypes.JSON),
        allowNull:false,
        defaultValue:[]
  }},
  { tableName: "teacherAttendance", timestamps: false }
);
