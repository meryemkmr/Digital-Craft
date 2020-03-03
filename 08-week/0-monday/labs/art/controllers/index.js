const express = require('express')
const router = express.Router()

let data = require('../data/data.json')


router.get('/', (req, res) => {

    let pagePhotos = [];
    data.speakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    
    

    console.log(pagePhotos);
    res.render('index',{
    artwork: pagePhotos,

    })
})

module.exports = router