const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
  
const User = sequelize.define('user', {
  
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING
    }
});

module.exports = User;