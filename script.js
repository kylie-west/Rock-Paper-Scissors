const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const win = "WIN";
const loss = "LOSS";
const tie = "TIE";

let wins = 0;
let losses = 0;
let ties = 0;

function determineResult(a, b) {
	switch (true) {
		case a === b:
			return tie;
		case a === rock && b === scissors:
			return win;
		case a === rock && b === paper:
			return loss;
		case a === paper && b === rock:
			return win;
		case a === paper && b === scissors:
			return loss;
		case a === scissors && b === paper:
			return win;
		case a === scissors && b === rock:
			return loss;
		default:
			break;
	}
}

function computerPlay() {
	// Randomly selects ROCK, PAPER, or SCISSORS
	let randomNum = Math.random();

	switch (true) {
		case randomNum < 1 / 3:
			return rock;
		case randomNum > 1 / 3 && randomNum < 2 / 3:
			return paper;
		case randomNum > 2 / 3:
			return scissors;
		default:
			break;
	}
}

function playRound(playerSelection) {
	let computerSelection = computerPlay();

	let result = determineResult(playerSelection, computerSelection);

	if (result === win) {
		wins++;
	} else if (result === loss) {
		losses++;
	} else if (result === tie) {
		ties++;
	} else {
		console.error("There was an issue determining the result.");
	}

	return {
		result,
		playerSelection,
		computerSelection,
	};
}

// UI STUFF

const message = document.getElementById("msg");
const subMessage = document.getElementById("sub-msg");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const buttonSection = document.querySelector(".buttons");
const buttons = Array.from(document.querySelector(".buttons").children);

function capitalize(string) {
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function gameOver() {
	const newButton = document.createElement("button");
	newButton.innerText = "Play again?";
	newButton.addEventListener("click", () => {
		location.reload();
	});

	buttonSection.replaceChildren(newButton);
}

function setImage(target, selection) {
	let img = document.createElement("img");

	img.setAttribute("src", `assets/${selection.toLowerCase}.png`);

	target.replaceChildren(img);
}

function choose(e) {
	e.preventDefault();

	const selection = e.target.innerText.toUpperCase();

	const round = playRound(selection);
	console.log(round);

	playerScore.innerText = `Player: ${wins}`;
	computerScore.innerText = `Computer: ${losses}`;

	setImage(playerImage, round.playerSelection);
	setImage(computerImage, round.computerSelection);

	if (wins === 3) {
		gameOver();

		message.innerText = "Congratulations!";
		subMessage.innerText = "You're the winner!";

		return;
	} else if (losses === 3) {
		gameOver();

		message.innerText = "Too bad...";
		subMessage.innerText = "The computer won. :(";

		return;
	} else if (round.result === win) {
		message.innerText = "You win!";

		subMessage.innerText = `${capitalize(
			round.playerSelection
		)} beats ${round.computerSelection.toLowerCase()}!`;
	} else if (round.result === loss) {
		message.innerText = "You lose...";

		subMessage.innerText = `${capitalize(
			round.playerSelection
		)} is beaten by ${round.computerSelection.toLowerCase()}.`;
	} else {
		message.innerText = "It's a tie.";
		subMessage.innerText = `The computer also chose ${round.playerSelection.toLowerCase()}.`;
	}
}

buttons.forEach((button) => {
	button.addEventListener("click", choose);
});
