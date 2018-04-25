'use strict';
module.exports = (sequelize, DataTypes) => {
  var Accessory = sequelize.define('Accessory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchase: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    renting: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: false
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  Accessory.associate = function(models) {
    // associations can be defined here
  };
  return Accessory;
};