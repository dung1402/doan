'use strict';

const sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Specialtys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      image: {
        type: Sequelize.STRING
      },
      name:{
        type:Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Specialtys');
  }
};