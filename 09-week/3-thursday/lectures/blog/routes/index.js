const express = require('express');
const router = express.Router();
let db = require('../models/database');


router.get('/', (req, res) => {

  db.query("SELECT * FROM blogs")
    .then((results) => {

      // [{title:value, author_id:value, category_id: value, body:value, date_pub: value}, {}, {}, {}]

      res.render('index.ejs', {
        blogs: results
      })
    })
    .catch((error) => {
      console.log(error);

      res.send('error.')
    })

});

module.exports = router;