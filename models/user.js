const bcrypt = require("bcryptjs");


module.exports = function(sequelize, DataTypes) {
const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
      isEmail: true
      }
    },
    //names
    firstname: {
          type: DataTypes.STRING
        },
    lastname:{
          type: DataTypes.STRING
      },
    //user name input
    username: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
      },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
     }
  });

  
    return User;
  };