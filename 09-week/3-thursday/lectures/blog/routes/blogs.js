const express = require('express');
const router = express.Router();
let db = require('../models/database');

//details of a blog
router.get('/blogs/:blogID', (req, res) => {

  let blogID = req.params.blogID;

  db.query('SELECT * FROM blogs WHERE id=$1', [blogID])
    .then((results) => {
      //results array of objects 
      res.render('blogs.ejs', {
        blog: results[0]  //this is an object - one record in our database
      })
        .catch((error) => {
          console.log(error);
        })
    })
});

module.exports = router;