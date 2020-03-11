const express = require('express');
let db = require('../models/database');
const router = express.Router();
const bodyParser = require('body-parser');
router.get('/newdishes', (req, res) => {
    db.query('SELECT * FROM categories')
    .then((results)=>{
        res.render('newdishes',{
            categories: results
        })
    })
    
})
router.use(bodyParser.urlencoded({extended: false}));
router.post('/newdishes',(req,res)=>{
    let name = req.body.title;
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let imageurl = req.body.imageurl;
    // let category = parseInt(req.body.category);
    let category = req.body.category;
    let course = "";

    
    db.none("INSERT INTO restaurants (name, category, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)",
    [name, category, description, price, course, imageurl])
    .then(() => {
        res.redirect('/dishes')
    })

    .catch((error) => {
        res.send('error')
    });
})


module.exports = router;