import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const hodModel = sequelize.define("hod", {
    hod_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(50),
        allowNull:true
    },
    deparment_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'department', 
            key:'department_id'},
        onDelete:'SET NULL'
    }
});

export default hodModel;
