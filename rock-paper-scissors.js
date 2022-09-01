function getComputerChoice() {
  choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection || "Rock";
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  
  if (playerSelection === computerSelection) {
    return `Tie! ${playerSelection} ties with ${computerSelection}.`;
  }
  else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    return `You lose! ${playerSelection} loses against ${computerSelection}.`;
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    console.log(playRound(prompt("Make your choice."), getComputerChoice()));
  }
}

game();