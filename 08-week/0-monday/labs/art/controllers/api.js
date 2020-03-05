const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

let feedbackData = require('../data/feedback.json');

// [{req.body},{},{},{},{},{}]


router.get('/api', (req, res) => {
  
    res.json(feedbackData)
})
// request (path, http verb) => (middleware) => handler
//grab form data from header (json)
router.use(bodyParser.urlencoded({extended: false}));
//converts header json string into a javascript object

router.use(bodyParser.json())

//PURPOSE: posting data from client-side form
router.post('/api', (req, res) => {
 
    //update the json file with form data

    feedbackData.unshift(req.body)
    
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
      
        if(err){
            console.log(err);
        }

        console.log(req.body);

        //feedbackData is js object.  Must be converted to json string.

        res.json(feedbackData)
    })   
  
})


//[{}, {},{},{},{}]

//api/1
router.delete('/api/:id', (req, res) => {
  
    feedbackData.splice(req.params.id, 1);

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
      
        if(err){
            console.log(err);
        }

        res.json(feedbackData);

    })

})




module.exports = router;