var button = document.getElementById("submitButton");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
// let appId = "a0c9ee27de727328e99c87f1c05cb76f";


button.addEventListener('click',function(){
    console.log(inputValue.value)
fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=a0c9ee27de727328e99c87f1c05cb76f')
.then(response =>response.json())
.then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];

    name.innerHTML = nameValue;
    temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
})



.catch(err => alert("Wrong city Name!"))

// function init(responseFromServer){
//     switch(responseFromServer.weather[0].main){
//         case "Clear":
//             document.body.style.backgroundImage = 'url("clear.jpg")';
//             break;
//         case "Clouds":
//             document.body.style.backgroundImage = 'url("cloudy.jpg")';
//             break;
//         case "Rain":
//         case "Drizzle":
//         case "Mist":
//             document.body.style.backgroundImage = 'url("rainly.jpg")';
//             break;
//         case "Thounderstorm":
//             document.body.style.backgroundImage = 'url("storm.jpg")';
//             break;
//         case "Snow":
//             document.body.style.backgroundImage = 'url("snow.jpg")';
//             break;
//         default:
//             break;


//     }
// }

})