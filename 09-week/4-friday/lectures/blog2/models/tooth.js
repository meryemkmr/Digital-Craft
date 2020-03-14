'use strict';
module.exports = (sequelize, DataTypes) => {
  const tooth = sequelize.define('tooth', {
    title: DataTypes.STRING
  }, {});
  tooth.associate = function(models) {
    // associations can be defined here
  };
  return tooth;
};