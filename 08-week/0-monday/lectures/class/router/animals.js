const express = require('express')
const router = express.Router()

router.get('/animals', (req, res) => {
    res.send('Animals')
})
module.exports = router