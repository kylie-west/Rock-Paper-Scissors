const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";
const win = "WIN";
const loss = "LOSS";
const tie = "TIE";

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

function playRound() {
	let computerSelection = computerPlay();

	let playerSelection = prompt("Rock, paper, or scissors?");
	playerSelection = playerSelection.toUpperCase();

	console.log(`Your selection: ${playerSelection}`);

	const tieMessage = `%cThe computer also chose ${playerSelection}. It's a tie. :|`;
	const winMessage = `%cThe computer chose ${computerSelection}! You win! :)`;
	const lossMessage = `%cThe computer chose ${computerSelection}. You lose... :(`;

	let result = determineResult(playerSelection, computerSelection);

	if (result === win) {
		console.log(winMessage, "color: green");
	} else if (result === loss) {
		console.log(lossMessage, "color: red");
	} else if (result === tie) {
		console.log(tieMessage, "color: yellow");
	}

	return result;
}

async function game() {
	let wins = 0;
	let losses = 0;
	let ties = 0;

	let i = 1;

	console.log("Best of five?");

	while (!(wins === 3 || losses === 3)) {
		console.log(`Round ${i}, go!`);

		let result = playRound();

		if (result === win) {
			wins++;
		} else if (result === loss) {
			losses++;
		} else if (result === tie) {
			ties++;
		} else {
			console.error("The result for this round is invalid.");
		}

		console.log(`Wins: ${wins} Losses: ${losses} Ties: ${ties}`);

		i++;
	}

	console.log("And the winner is...");

	if (wins > losses) {
		console.log("you!!! :D");
	} else if (wins < losses) {
		console.log("the computer!!! Better luck next time...");
	} else {
		console.log("nobody. Lame...");
	}
}

game();
