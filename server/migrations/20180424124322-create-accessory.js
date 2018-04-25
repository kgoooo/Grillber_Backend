'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Accessories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      purchase: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      renting: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaiult: false
      },
      condition: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image1: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image2: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      }      
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Accessories');
  }
};