let deck = [];
var suits = ["S", "D", "C", "H"];
var cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let imgUrl = "";
let value = 0;

suits.forEach(function(suit){
    cardValues.forEach(function(cardValue){
        imageURL="./images/"+cardValue+suit+".jpg";  //   console.log(imageURL);
        if (cardValue=="J"||cardValue=="Q"||cardValue=="K"){
            value=10;
        }

        else if (cardValue=="A"){
            value=11;
        }
        else{
            value=cardValue;
        };  
        // console.log(value);
        
        let imgAndValue={URL:imageURL, v:value};
        deck.push(imgAndValue);
        // deck.push()
    })
})
function shuffleArray(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

shuffleArray(deck);



//====================FUNCTIONS========================

let dH=document.getElementById("dealer-hand");
let pH=document.getElementById("player-hand");
let dP=document.getElementById("dealer-points");
let pP=document.getElementById("player-points");
let dealer={hLabel:dH, pLabel:dP, points:0, aCount:0};
let player={hLabel:pH, pLabel:pP, points:0, aCount:0};
let curCard={};

function dealcards(person){
    let imgTag=document.createElement("img");
 
    curCard=deck.pop();
    imgTag.src=curCard.URL;
    imgTag.setAttribute("class","card");
    person.hLabel.appendChild(imgTag);

    if(curCard.v==11){ //count Aces
        person.aCount++;   
        console.log("got an Ace!");
    }

    let cardV = parseInt(curCard.v);
    let personPointsV = parseInt(person.points);
    console.log("STUFF: ")
    console.log(cardV)
    console.log(personPointsV)

    person.points=cardV+personPointsV;

    console.log("Person.points: ")
    console.log(person.points)

    if((person.points>21)&&(person.aCount>0)){
        person.points = person.points-10;
        person.aCount = person.aCount -1;
    }

    else if(person.points>21){
        person.pLabel.textContent=person.points+" Points is over 21!! Lose!!";    
    }
    else if(person.points==21){
        person.pLabel.textContent="You got 21! You Win!"
    }
    else{
        person.pLabel.textContent=person.points+" Points";
    }
}

function clear(person){
    person.pLabel.innerHTML="";
    person.hLabel.innerHTML="";
    person.aCount=0;
    person.points=0;
}
    
//=============================EVENTS========================================================
document.getElementById("deal-button").addEventListener("click", function(e){
    clear(dealer);
    clear(player);
    dealcards(dealer);
    dealcards(player);
    dealcards(dealer);
    dealcards(player);
    
});



document.getElementById("hit-button").addEventListener("click", function(e){
    dealcards(player);
});
document.getElementById("stand-button").addEventListener("click", function(e){
    while (dealer.points<=16){
        dealcards(dealer);
    }
    if (22>dealer.points>player.points){
        dealer.pLabel.textContent=dealer.points +" points! and the dealer wins!";
    }
    else if (dealer.points<player.points&&player.points<22){
        player.pLabel.textContent=player.points +" points! and you win!";
    }
    else if(dealer.points==player.points){
        player.pLabel.textContent=player.points + " Friendly Game, Pushed";
        dealer.pLabel.textContent=dealer.points + " Friendly Game, Pushed"
    }
});