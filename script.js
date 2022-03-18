let message = document.querySelector("#message");
let sum = document.querySelector("#sum");
let cards = document.querySelector("#cards");
let cardButton = document.querySelector("#cardButton");
let total = 0;
let isBlackjack = false;
let inGame = true;
let allCards = [];
let resultText = "";

function getRandom() {
	let randomNumber = Math.floor(Math.random() * 13 + 1);
	if (randomNumber > 11) {
		return 10;
	} else if (randomNumber === 11) {
		return 11;
	} else {
		return randomNumber;
	}
}
function startsGame() {
	let firstCard = getRandom();
	let secondCard = getRandom();
	allCards = [firstCard, secondCard];
	total = firstCard + secondCard;
	inGame = true;
	playGame();
	gameReset();
}
function playGame() {
	cards.textContent = "Your Cards : ";
	for (let i = 0; i < allCards.length; i++) {
		cards.textContent += allCards[i] + " ";
	}
	sum.textContent = "Sum: " + " " + total;
	if (total > 21) {
		resultText = "Too much point, you LOST !";
		inGame = false;
		gameReset();
	} else if (total === 21) {
		resultText = "It's BlackJack yes, you WON";
		isBlackjack = true;
		gameReset();
	} else {
		resultText = "Want to draw more cards ?";
	}
	message.textContent = resultText;
}
function newCard() {
	if (inGame === true && isBlackjack === false) {
		if (!resultText == "") {
			let newcards = getRandom();
			allCards.push(newcards);
			total += newcards;
			playGame();
		}
	}
}
function gameReset() {
	if (inGame === false || isBlackjack === true) {
		cardButton.classList.add = "hidebtn";
		let inGame = true;
		let allCards = [];
		let resultText = "";
		let total = 0;
	}
}
