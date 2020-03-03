const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    let fruits = ["oranges", "apples", "bananas", "kiwi", "limes", "tomatoes", "peaches"]
    res.render('index', {
        pageTitle: "Vegan Cooking Recipes",
        description: "How to make delicious vegan recipes",
        fruitList: fruits
    })
})
module.exports = router