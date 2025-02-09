import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const internalModel = sequelize.define('internal',{
    internal_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    marks:{
        type:DataTypes.JSON,
        allowNull:false
    },
    student_id:{
        type:DataTypes.STRING,
        allowNull:false,
        references:{
            model:"student",
            key:"student_id"
        },
        onDelete:"CASCADE"
    },
    department_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"department",
            key:"department_id"
        },
        onDelete:"CASCADE"
    }
},{tableName:'internal',timestamps:false})  

export default internalModel