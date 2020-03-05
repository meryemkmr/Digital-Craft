const express = require('express');
const app = express();
let PORT = 3000;

// public folder
app.use(express.static('public'))


// set view folder

app.set('view engine','ejs')
app.set('views', 'views')

//index.ejs
//speakers.ejs



//set routes
//index.js
//speakers.js
//
app.use(require('./controllers/index'))
app.use(require('./controllers/speakers'))
app.use(require('./controllers/feedback'))
app.use(require('./controllers/api'))




app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})



// {
//     speakers: [{}, {}, {}]
// }
// speaker: [1, 2, 3, 4, 5]
// let data = require('./data.json')
// console.log(data.speakers);
// let photoDeck = [];
// data.speakers.forEach((speakerObj)=>{
//     photoDeck = photoDeck.concat(speakerObj.artwork)
// })
// console.log(photoDeck);