const http = require("http");
let myServer = http.createServer((req,res)=>{
    //here where code goes to send back to user
    res.statusCode = 200;
    res.setHeader("Content-Text","text/html");
    res.end("<h1 style = 'color:tomato;'> Hello World!</h1>")
})
myServer.listen(3000,()=>{
    console.log("listining on port 3000");
})