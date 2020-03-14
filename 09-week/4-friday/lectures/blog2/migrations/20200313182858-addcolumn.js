'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    

    
      return queryInterface.addColumn(
        'tests',
        'newColumn',
        {type: Sequelize.INTEGER });
    
  },

  down: (queryInterface, Sequelize) => {
    

     
      return queryInterface.removeColumn('tests','newColumn');
    
  }
};
