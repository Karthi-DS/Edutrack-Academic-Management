import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const studentFeeModel = sequelize.define(
  "studentFee",
  {
    fee_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'student',
            key: 'student_id'   
        },
        onDelete: 'CASCADE'
    },
    total_fee:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paid_fee:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    current_semester_fee:{  
        type: DataTypes.INTEGER,
        allowNull: false
    },
    current_semester_fee_paid:{
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    remaining_fee:{
        type: DataTypes.VIRTUAL,
        get(){
            return this.current_semester_fee - this.current_semester_fee_paid;
        }
    },


  },
  { tableName: "studentFee", timestamps: false }
);

export default studentFeeModel;