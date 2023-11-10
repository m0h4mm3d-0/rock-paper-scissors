let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
	let choices = ["Rock", "Paper", "Scissors"];
	let choice = choices[Math.floor(Math.random()*3)];
	return choice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "Tie!";
	} else if (playerSelection === "rock" && computerSelection === "scissors" ||
		playerSelection === "paper" && computerSelection === "rock" ||
		playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		return (`you Win! ${playerSelection} beats ${computerSelection}`);
	} else {
		computerScore++;
		return (`you Lose! ${computerSelection} beats ${playerSelection}`);	
	}
}


function game() {
	for (let i = 0; i <= 5; i++) {
		const playerSelection = prompt("Rock, Paper, Scissors?: ").toLowerCase();
		const computerSelection = getComputerChoice().toLowerCase();
		console.log(computerSelection);
		console.log(playRound(playerSelection, computerSelection));
		console.log(playerScore, "-", computerScore);
	}
}

game();
