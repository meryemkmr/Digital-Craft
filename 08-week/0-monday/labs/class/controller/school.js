const express = require('express')
const router = express.Router()


router.get('/school', (req, res) => {
    // res.send('index page')
    res.render('school')
})
module.exports = router