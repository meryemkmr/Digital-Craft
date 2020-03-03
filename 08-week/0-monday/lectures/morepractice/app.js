const express = require('express')
const app = express()

app.set('view engine','ejs')
app.set('views','views')


app.use(express.static('public'))

app.use(require('./controllers/index'))
app.use(require('./controllers/aboutus'))
app.use(require('./controllers/school'))






app.listen(3000,()=>{
    console.log('surver is running')
})