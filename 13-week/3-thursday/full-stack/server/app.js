let express = require('express');
let app = express();


app.get('/api', (req, res) => {

    res.json([
        {
            id: 1,
            username: 'Meryem'
        },
        {
            id: 2,
            username: 'Aydin'
        }
    ])

})


app.listen('3001', () => {
    console.log('listening on port 3001');
})