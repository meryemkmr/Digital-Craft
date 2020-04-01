'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('categories', [
        {
        name: 'javascript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: 'node',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: 'express',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: 'java',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: 'react',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
