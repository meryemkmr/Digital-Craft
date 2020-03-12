'use strict';
module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define('authors', {
    name: DataTypes.STRING,
    biography: DataTypes.STRING
  }, {});
  authors.associate = function(models) {
    // associations can be defined here
    models.author.hasMany(models.blog)
  };
  return authors;
};