const express = require('express')
const router = express.Router()


router.get('/aboutUs', (req, res) => {
    res.send('about us')
})
module.exports = router