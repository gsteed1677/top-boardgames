
module.exports = function(sequelize, DataTypes) {
const topGame = sequelize.define("topGame", {
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
    name: {
          type: DataTypes.STRING
        },
    players:{
          type: DataTypes.STRING
      },
    //user name input
    genre: {
          type: DataTypes.STRING,
      },
    
    // The password cannot be null
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
     }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  return topGame
};