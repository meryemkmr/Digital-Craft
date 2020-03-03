const express = require('express')
const router = express.Router()


router.get('/cars/:cars', (req, res) => {
    let cars = req.param('cars')
    res.send(`${cars} Cars`)
})
module.exports = router