



     let url = `https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=a0c9ee27de727328e99c87f1c05cb76f`
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((weatherObj)=>{
            console.log(weatherObj)

            console.log(weatherObj.main.temp)
            let Cel = weatherObj.main.temp-273.15;
            console.log(Cel);

            let degCRound = Math.floor(Cel);
            console.log(degCRound);
            let degF = degCRound*1.8+32;

            console.log(degF);

            let degFRound = Math.floor(degF);

            console.log(degCRound);

            let body = document.querySelector("body")

            body.innerHTML = degCRound.toString();
            
            
        })
    

