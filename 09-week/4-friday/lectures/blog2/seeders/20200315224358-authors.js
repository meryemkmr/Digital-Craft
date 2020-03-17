'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    

      
      return queryInterface.bulkInsert('authors', [{
        name: 'Meryem',
        bio: '',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aydin',
        bio: '',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Melike',
        bio: '',
        imageURL: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
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
