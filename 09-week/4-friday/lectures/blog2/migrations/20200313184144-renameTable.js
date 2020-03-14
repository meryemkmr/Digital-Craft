'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.renameTable('tests','newTests');
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.renameTable('newTests','tests');
    
  }
};
