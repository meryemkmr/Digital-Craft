const express = require('express');
const db = require('../models/database');
const router = express.Router();



router.get('/dishes', (req, res) => {
    db.query('SELECT * FROM restaurants')
        .then((results) => {
            //results is an array of objects
            res.render('dishes', {
                dishes: results
            })
        })
    // res.render('dishes')
})




module.exports = router;