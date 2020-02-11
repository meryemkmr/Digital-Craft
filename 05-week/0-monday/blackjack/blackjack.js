
let deck = [];
var suits = ["S", "D", "C", "H"];
var cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

suits.forEach(function(suit){
    cardValues.forEach(function(cardValue){
        deck.push()
    })
})
function displayWin() {
    let overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
    'style',
    'position:absolute; width:100%; height: 250px; background-image: linear-gradient(to right, rgba(255,255,0,0), rgba(255,255,0,1), rgba(255,255,0,0)); top: 200px; text-align: center; font-size: 72px; opacity: 1;'
    );
    overlayDiv.textContent = 'You Win! Press deal to play again...';
    document.body.appendChild(overlayDiv);
}
function displayLoss() {
    var overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
    'style',
    'position:absolute; width:90%; height: 250px; background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0)); top: 200px; text-align: center; font-size: 72px; opacity: 1;'
    );
    overlayDiv.textContent = 'You Lose! Press deal to play again...';
    document.body.appendChild(overlayDiv);
}

function displayTie() {
    var overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id', 'overlay');
    overlayDiv.setAttribute(
    'style',
    'position:absolute; width:90%; height: 250px; background-image:  linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%); top: 200px; text-align: center; font-size: 72px; opacity: 1;'
    );
    overlayDiv.textContent = 'You Tie! Press deal to play again...';
    document.body.appendChild(overlayDiv);
}


function getDeck()
{
    
	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < cardValues.length; x++)
		{
            let cardValue = 0;
            if(cardValues[x]=="J" || cardValues[x] == "Q" ||cardValues[x] == "K" ){
                cardValue = 10;
            }
            else if(cardValues[x]== "A"){
                cardValue = 11;
            } else {
                cardValue = parseInt(cardValues[x]);
            }

            const url = "images/" + cardValues[x] + suits[i]+ ".jpg"
            

            
            var card = {Value: cardValue, Suit: suits[i], Image:url};
            
            deck.push(card);
		}
	}

	return deck;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(getDeck())
shuffleArray(deck)


var dealerHandValue = [];
var playerHandValue = [];
function dealCard(id, handArr) {
    // if(dealerHand = image[0])
    // return deck[0].pop()
    let img = document.createElement("img");
    img.setAttribute("src",deck[deck.length -  1].Image);
    console.log(img)
    let handDiv = document.getElementById(id);
    handDiv.append(img);
    handArr.push(deck[deck.length -  1])
    deck.pop()
}

function calculatePoints(id, hand){
    let handValue = 0;
    console.log("HAND: ")
    console.log(hand)

    for (var i = 0; i < hand.length; i++) {
        let value = parseInt(hand[i].Value)
        handValue += value
        console.log("CARD: ")
        console.log(hand[i])

    let person = ""
    if (id == "playerScore") {
        person = "Player: "
    } else {
        person = "Dealer: "
    }
    let dealerValue = 0;
    let playerValue = 0;
    function checkValue() {
        if (playerValue <= 21 && dealerValue <= 21) {
          //dealer method
        if (playerValue > dealerValue) {
            displayWin();
        } else if (dealerValue > playerValue) {
            displayLoss();
        } else {
            displayTie();
        }
        } else if (playerValue > 21) {
        displayLoss();
        } else if (dealerValue > 21) {
        displayWin();
        }
    }
    function endGame() {
        if (playerValue >= 21) {
        checkValue();
        }
    }


    document.getElementById(id).innerHTML = person + handValue
    
    
}
}

document.getElementById("deal-button").addEventListener("click", function(e){
    dealCard("dealer-hand",dealerHandValue)
    dealCard("dealer-hand",dealerHandValue)
    dealCard("player-hand",playerHandValue)
    dealCard("player-hand",playerHandValue)
    calculatePoints("playerScore", playerHandValue)
    calculatePoints("dealerScore", dealerHandValue)










});
document.getElementById("hit-button").addEventListener("click", function(e){
    let img = document.createElement("img");
    img.setAttribute("src",deck[3].Image);
    console.log(img)
    let playerHand = document.getElementById("player-hand");
    playerHand.append(img)
    
    //write "hit" logic here
});
document.getElementById("stand-button").addEventListener("click", function(e){
    // write "Stand" logic here
});





