const {DataTypes} = require("sequelize");
const sequelize = require("./db");
const Student = sequelize.define("Student",{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    course:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false, tableName: "student"});

module.exports = Student;