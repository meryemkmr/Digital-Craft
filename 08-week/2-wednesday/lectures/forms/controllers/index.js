const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//request => server handles request => middleware=> handler
router.use(bodyParser.urlencoded({extended: false}));
router.get('/', (req, res) => {
    res.render('index')
})
router.post('/', (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let zipcode = req.body.zipcode;
    // res.send(`email: ${email} name: ${name} phone: ${phone} zipcode: ${zipcode}`)
    // res.send("success")
    res.render('index', {
        name : name,
        email: email,
        phone: phone,
        zipcode: zipcode
    })
})
module.exports = router;
