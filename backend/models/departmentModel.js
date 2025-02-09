import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const deparmentModel = sequelize.define('department',{
    department_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    subjects:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false,
        references:{
            model:"academicSubject",
            key:"name"
        },
        onDelete:"CASCADE"
    },
    hod_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"hod",
            key:"hod_id"
        },
        onDelete:"SET NULL"
    },
},
{tableName:'department',timestamps:false})

export default deparmentModel;