function getComputerChoice() {
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  winner.style.visibility = "hidden";

  if (playerSelection === computerSelection) {
    result.textContent = `Tie! ${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection}.`;
  }
  else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
    result.textContent = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}.`;
    playerScore += 1;
  }
  else {
    result.textContent = `You lose! ${capitalizeFirstLetter(playerSelection)} loses against ${computerSelection}.`;
    computerScore += 1;
  }

  if (playerScore === 5) {
    winner.textContent = "You win!";
    winner.style.visibility = "visible";
    playerScore = 0;
    computerScore = 0;
  }
  else if (computerScore === 5) {
    winner.textContent = "Computer wins!";
    winner.style.visibility = "visible";
    playerScore = 0;
    computerScore = 0;
  }

  score.textContent = `${playerScore} - ${computerScore}`;
  result.style.visibility = "visible";
}

const result = document.querySelector(".result");
const winner = document.querySelector(".winner");
const gameButtons = document.querySelectorAll(".game-buttons");
const score = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;


result.style.visibility = "hidden";
result.textContent = "result";
winner.style.visibility = "hidden";
winner.textContent = "winner";
gameButtons.forEach(button => {button.addEventListener("click", () => playRound(button.id, getComputerChoice()))});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}