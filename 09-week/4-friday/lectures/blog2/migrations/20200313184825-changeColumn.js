'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.changeColumn('newTests','title',
       {type: Sequelize.STRING(40) });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('users');
    
  }
};
