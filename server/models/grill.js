'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grill = sequelize.define('Grill', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },      
    brand: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    serial_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fuel_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate_daily: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rate_hourly: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    renting: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    purchase_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    serves: {
      type: DataTypes.INTEGER,
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
  Grill.associate = (models) => {
    // associations can be defined here
  };
  return Grill;
};