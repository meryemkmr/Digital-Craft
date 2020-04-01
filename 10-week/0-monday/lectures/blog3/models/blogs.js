'use strict';
module.exports = (sequelize, DataTypes) => {
  const blogs = sequelize.define('blogs', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  blogs.associate = function(models) {
    // associations can be defined here
    blogs.belongsTo(models.author,{foreignKey:authorID});
    blogs.belongsTo(models.categories,{foreignKey:categoryID});
    
  };
  return blogs;
};