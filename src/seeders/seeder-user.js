'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password:'12345',
      firstName: 'dung',
      lastName: 'duong',
      phoneNumber:'0766723330',
      address:'ha tinh',
      gender:0,
      image:0,
    roleId:'ROLE',
    positionId:'R1',
      
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    
  }
};
