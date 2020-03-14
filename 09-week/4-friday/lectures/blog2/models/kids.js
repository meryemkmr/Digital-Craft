'use strict';
module.exports = (sequelize, DataTypes) => {
  const kids = sequelize.define('kids', {
    title: DataTypes.STRING
  }, {});
  kids.associate = function(models) {
    // associations can be defined here
  };
  return kids;
};