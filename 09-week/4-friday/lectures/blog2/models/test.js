'use strict';
module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    title: DataTypes.STRING,
    count: DataTypes.INTEGER,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  test.associate = function(models) {
    // associations can be defined here
  };
  return test;
};