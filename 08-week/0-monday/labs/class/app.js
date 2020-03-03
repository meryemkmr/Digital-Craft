const express = require('express');
const app = express();
let PORT = 3000;


app.use(express.static('public'))



app.set('view engine','ejs')
app.set('views', 'views')



app.use(require('./controller/index'))
app.use(require('./controller/aboutus'))
app.use(require('./controller/school'))
app.use(require('./controller/cars'))


app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})