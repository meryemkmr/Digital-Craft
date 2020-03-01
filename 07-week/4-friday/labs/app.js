const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello World!")
})

app.get("/cats",(req,res)=>{
    console.log(req)
    res.send("<h1>Meow</h1>")
})

app.get("/dogs",(req,res)=>{
    console.log(req)
    res.send("Woof")
})

app.get("/cats_and_dogs",(req,res)=>{
    console.log(req)
    res.send("Living together")
})
app.get("/greet/:name",(req,res)=>{
    console.log(req)
    let name = req.param('name') 
    res.send(`Hello , ${name}!`)
})
app.get('/hello1', (req, res)=>{

    var name = req.query.name || 'world';
    
    res.send('Hello ' + name + '!');
    
})
app.get('/year/:age', (req, res)=>{

    let age = Number(req.param('age'))

    let year = 2020-age
    res.send(`You were born in ${year}`); 
});




app.listen(3000,()=>{
    console.log("Server is running");
})