console.log("Up and running!")

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}	
}
var flipCard = function (cardId) { 
	console.log("User flipped"+" "+cards[cardId]);

if (cardsInPlay.length === 2) {
	console.log("They're 2 cards");
}
	if (cardsInPlay[0] === cardsInPlay[1]) { alert("You found a match!");
} else { alert("Sorry,try again.");}

};
flipCard(0);

cardsInPlay.push(cards[cardId]);




