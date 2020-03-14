const db = require('./models');

db.categories.findAll()
.then(results =>{
    console.log(results);
})


db.blogs.create({
    title: 'loving sequelize',
    body: 'we loving sequelize',
    categoryID: 1,
    authorID: 1
})
.then(blog=>{
    console.log(blog.id)
})