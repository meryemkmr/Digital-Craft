const express = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views','views')

app.use(express.static('public'))


app.use(require('./controllers/index'))





app.listen(3001,()=>{
    console.log("Server is runnig");
})