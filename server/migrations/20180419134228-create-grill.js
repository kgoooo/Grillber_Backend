'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => { queryInterface.createTable('Grills', 
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      brand: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      serial_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fuel_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rate_daily: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rate_hourly: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      condition: {
        allowNull: false,
        type: Sequelize.STRING
      },
      renting: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      purchase_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      serves: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image2: {
        type: Sequelize.STRING,
        allowNull: true        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => { queryInterface.dropTable('Grills') }
};