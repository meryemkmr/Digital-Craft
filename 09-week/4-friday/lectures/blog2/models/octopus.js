'use strict';
module.exports = (sequelize, DataTypes) => {
  const octopus = sequelize.define('octopus', {
    title: DataTypes.STRING
  }, {});
  octopus.associate = function(models) {
    // associations can be defined here
  };
  return octopus;
};