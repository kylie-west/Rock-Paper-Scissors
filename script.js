const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const win = "WIN";
const loss = "LOSS";
const tie = "TIE";

function determineResult(a, b) {
	a === b
		? tie
		: a === rock && b === paper
		? win
		: a === rock && b === scissors
		? loss
		: a === paper && b === rock
		? win
		: a === paper && b === scissors
		? loss
		: a === scissors && b === paper
		? win
		: a === scissors && b === rock
		? win
		: console.log("Unable to determine result.");
}

function computerPlay() {
	// Randomly selects ROCK, PAPER, or SCISSORS
	let randomNum = Math.random();

	switch (randomNum) {
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

function playRound(playerSelection, computerSelection) {
	playerSelection.toUpperCase();
}

function game() {}
