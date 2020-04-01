'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('authors', [{
        name: 'meryem',
        bio: '',
        imgURL:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'melike',
        bio: '',
        imgURL:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'aydin',
        bio: '',
        imgURL:'',
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
