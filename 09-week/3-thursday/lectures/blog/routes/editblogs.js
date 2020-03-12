const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let db = require('../models/database');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/editblogs', (req, res) => {

  db.query('SELECT * FROM categories')
    .then((catResults) => {

      db.query('SELECT * FROM authors')
        .then((authResults) => {
          res.render('editblogs.ejs', {
            authors: authResults,
            categories: catResults
          })
        })
        .catch((error) => {
          console.log("error in authors query: ", error);
        })
    })
    .catch((error) => {
      console.log("error in category query", error);
    })

});


router.post('/editblogs', (req, res) => {


  let title = req.body.title;
  let authorID = req.body.author;
  let category = req.body.category;
  let body = req.body.body;

  let date = "2020-04-01";


  db.none('INSERT INTO blogs (title, author_id, category_id, body, date_pub) VALUES ($1, $2, $3, $4, $5)',
    [title, authorID, category, body, date])
    .then(() => {

      res.redirect('/')
    })
    .catch((error) => {
      console.log(error);
    })


})

module.exports = router;