'use strict';
module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define('player', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {});
  player.associate = function(models) {
    // associations can be defined here
    
    models.player.belongsTo(models.team)
  };
  return player;
};