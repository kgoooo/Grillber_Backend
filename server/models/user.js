'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull:false
    },
    avatar_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cc_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cc_exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cc_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_number: { 
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};