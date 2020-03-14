'use strict';
module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    title: DataTypes.STRING
  }, {});
  person.associate = function(models) {
    // associations can be defined here
  };
  return person;
};