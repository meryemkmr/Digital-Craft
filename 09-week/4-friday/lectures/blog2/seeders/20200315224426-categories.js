'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('categories', [
        {
        name: 'Javascript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: 'NodeJS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
        {
        name: 'Sequelize',
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
