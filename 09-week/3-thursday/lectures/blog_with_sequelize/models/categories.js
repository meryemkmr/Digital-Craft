'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    title: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    models.categories.hasMany(models.blog)
  };
  return categories;
};