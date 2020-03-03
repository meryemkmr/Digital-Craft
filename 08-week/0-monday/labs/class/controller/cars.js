const express = require('express');
const router = express.Router();
let carBlogs = [
{
    id: 1,
    carName: "lambo truck",
    header: "Lambo Truck are really cool",
    body: "this is a blog about lambo trucks",
    author: "Diego Rivera",
    imageURL: "https://cdn.motor1.com/images/mgl/krex4/s1/lamborghini-urus-pickup-render.jpg",
    publishDate: "Jan. 1, 2020"
},{
    id: 2,
    carName: "tesla model S",
    header: "Tesla Model S are overpriced",
    body: "I think these are overpriced.  What if the software for the car fails?",
    author: "Sean Page",
    imageURL: "https://www.tesla.com/sites/tesla/files/curatedmedia/model-s-performance.jpg",
    publishDate: "Jan. 15, 2020"
},{
    id: 3,
    carName: "Cyber Truck",
    header: "What on earth is a Cyber Truck?",
    body: "this is something I have to find more information about",
    author: "Jaye Jensen",
    imageURL: "https://cdn.motor1.com/images/mgl/XP4Yp/s1/tesla-cybertruck-renderings.jpg",
    publishDate: "Jan. 11, 2020"
}
];
router.get('/cars', (req, res) => {
    res.send("select a car")
})
router.get('/cars/:carID', (req, res) => {
    let carID = req.param('carID');
    res.render('cars', {
        cars: carBlogs[carID]
    })
})
module.exports = router;