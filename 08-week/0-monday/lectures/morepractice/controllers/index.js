const express =require('express')
const router = express.Router()



router.get('/',(req,res)=>{    
// res.send('index page')
let fruit = ['oranges','apples','bananas','kiwi']
res.render('index',
{
    pageTitle: 'Vegan cooking Recipes',
    description: "How to make delicious vegan recipes",
    fruitList: fruit
})
})

module.exports = router