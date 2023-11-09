

function getComputerChoice() {
	let choices = ["Rock", "Paper", "Scissors"];
	let choice = choices[Math.floor(Math.random()*3)];
	return choice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "paper") {
		return "you Lose! Paper beats Rock";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		return "you Win! Rock beats Scissors";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		return "you Win! Paper beats Rock";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		return "you Lose! Scissors beats Paper";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		return "you Lose! Rock beats Scissors";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		return "you Win! Scissor beats Paper";
	} else return "Draw!";
}

function game() {
	for (let i = 0; i <= 5; i++) {
		const playerSelection = prompt("Rock, Paper, Scissors?: ").toLowerCase();
		const computerSelection = getComputerChoice().toLowerCase();
		console.log(computerSelection);
		console.log(playRound(playerSelection, computerSelection));
		
	}
}

game();
