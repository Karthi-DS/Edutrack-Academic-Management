import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const studentModel = sequelize.define('student',{
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    reg_no:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mobile_no:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    parent_details:{
        type:DataTypes.JSON,
        allowNull:true
    },
    address:{
        type:DataTypes.STRING,
        allowNull:true
    },
    cgpa:{
        type:DataTypes.STRING,
        allowNull:true,
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
    mentor_id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            model:"teacherProfile",
            key:"teacher_id"
        },
        onDelete:"SET NULL"
    },
    department_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'department',
            key:"department_id"
        },
        onDelete:"CASCADE"
    }
},{tableName:'student',timestamps:false})   

export default studentModel;