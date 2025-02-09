import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const leaveRequestModel = sequelize.define(
  "leaveRequest",
  {
    leave_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    leave_type:{
        type: DataTypes.ENUM('OD','ML'),
        allowNull: false
    },
    from_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    to_date:{
        type: DataTypes.DATE,
        allowNull: false
    },
    isHodApproved:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        references:{
            model: 'hod',
            key: 'hod_id'   
        },
    },
    isMentorApproved:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        references:{
            model: 'teacher',
            key: 'teacher_id'   
        },
    },
  },
  { tableName: "leaveRequest", timestamps: false }
);

export default leaveRequestModel;