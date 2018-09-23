console.log("Up and running!")

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cradImage: "images/queen-of-hearts.png"

},
{
	rank: "queen",
	suit: "diamonds",
	cradImage: "images/queen-of-diamonds.png"

},
{
	rank: "king",
	suit: "hearts",
	cradImage: "images/king-of-hearts.png"

},
{
	rank: "king",
	suit: "diamonds",
	cradImage: "images/king-of-diamonds.png"
	

},

];
var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}	
};
	var CreateBoard = function(){
	for (var i = 0; i <  cards.length; i++) {
		var cardElement = document.creatElement('img');
		var cardElement = document.creatElement('img');
		var cardElement = document.creatElement('img');
		var cardElement = document.creatElement('img');
		document.setAttribute('src', "images/back.png");
		document.setAttribute('data-id'+ i);
		document.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(CreateBoard);
}
};


	var flipCard = function () { 
		var cardId = this.getAttribute('data-id');

		console.log("User flipped"+" "+cards[cardId].rank);
		console.log(this.cradImage);
		console.log(this.suit);

		document.setAttribute(cards[cardId].cardImage)

	if (cardsInPlay.length === 2) {
		console.log("They're 2 cards");
	}
		if (cardsInPlay[0] === cardsInPlay[1]) { alert("You found a match!");
	} else { alert("Sorry,try again.");}

	cardsInPlay.push( cards[cardId].rank );
	
	};

CreateBoard();




