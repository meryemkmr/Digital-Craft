const express = require('express');
const app = express();
let PORT = 3000;

app.use(require('./router/index'))
app.use(require('./router/animals'))
app.use(require('./router/about'))
app.use(require('./router/cars'))

app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})