const http = require('http');
const server = http.createServer((request, response)=>{
    switch(request.url){
        case '/':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain')
            response.end("Home Page");
            break;
        case '/aboutUs':
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain')
            response.end("About us page");
            break;
        default:
            response.statusCode = 404;
            response.end("Page NOT Found");
    }
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/plain')
    // response.end("Hello World")
});
server.listen(5000, ()=>{
    console.log("Running on port 5000");
});