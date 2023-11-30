let computerScore = 0;
let playerScore = 0;
const rockbtn = document.querySelector('.rock');
const paperbtn = document.querySelector('.paper');
const scissorsbtn = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result');


function getComputerChoice() {
	let choices = ["Rock", "Paper", "Scissors"];
	let choice = choices[Math.floor(Math.random()*3)];
	return choice;
}

function playRound(playerSelection, computerSelection) {
	const p = document.createElement('p'); 
	if (playerSelection === computerSelection) {
		p.innerText = "Tie!";
	} else if (playerSelection === "rock" && computerSelection === "scissors" ||
		playerSelection === "paper" && computerSelection === "rock" ||
		playerSelection === "scissors" && computerSelection === "paper") {
		playerScore++;
		p.innerText = (`you Win! ${playerSelection} beats ${computerSelection}`);
	} else {
		computerScore++;
		p.innerText = (`you Lose! ${computerSelection} beats ${playerSelection}`);	
	}
	return resultDiv.appendChild(p);
}

const winnerCheck = (playerScore, computerScore) => {
	const h2 = document.createElement('h2');
	if (playerScore === 5) {
		h2.innerText = `you won, ${playerScore} - ${computerScore}`;
	} else if (computerScore === 5) {
		h2.innerText = `you lost, ${playerScore} - ${computerScore}`;
	}
	return resultDiv.appendChild(h2);
}

rockbtn.addEventListener('click', () => {
	const computerSelection = getComputerChoice().toLowerCase();
	const playerSelection = 'rock';
	playRound(playerSelection, computerSelection);
	winnerCheck(playerScore, computerScore);
})

paperbtn.addEventListener('click', () => {
	const computerSelection = getComputerChoice().toLowerCase();
	const playerSelection = 'paper';
	playRound(playerSelection, computerSelection);
	winnerCheck(playerScore, computerScore);
})

scissorsbtn.addEventListener('click', () => {
	const computerSelection = getComputerChoice().toLowerCase();
	const playerSelection = 'scissors';
	playRound(playerSelection, computerSelection);
	winnerCheck(playerScore, computerScore);
})


//function game() {
//	for (let i = 0; i <= 5; i++) {
//		const playerSelection = prompt("Rock, Paper, Scissors?: ").toLowerCase();
//		const computerSelection = getComputerChoice().toLowerCase();
//		console.log(computerSelection);
//		console.log(playRound(playerSelection, computerSelection));
//		console.log(playerScore, "-", computerScore);
//	}
//}
//
//game();
