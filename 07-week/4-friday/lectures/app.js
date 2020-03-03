
const path = require("path")

const express = require('express');
const app = express();

app.use(express.static("public"))


app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname,"index.html"))
//   res.send('<h1 style = "color:tomato">Hello World!</h1>');
});
app.get('/about', function (req, res) {
    res.sendFile(path.resolve(__dirname,"about.html"))
//   res.send('<h1 style = "color:tomato">Hello World!</h1>');
});
app.get("/users/:userID/movies/:moviesID",(req,res)=>{
    res.send(
        `<h1> UserName:${req.params.userID}</h1>
        <h1> MoviesName:${req.params.moviesID}</h1>
    
    
    `)
})



app.listen(3000, function () {
  console.log('Listening on port 3000');
});