"use strict";

const playerSelection = prompt("What's your choice?");
// const playerSelection = "rock"
// let computerSelection = computerPlay();

function computerPlay() {
  const randomnNumber = Math.floor(Math.random() * 3) + 1;
  //   console.log(randomnNumber);

  if (randomnNumber === 1) {
    // console.log("rock");
    return "rock";
  } else if (randomnNumber === 2) {
    // console.log("paper");
    return "paper";
  } else {
    // console.log("scissor");
    return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It is a Draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You Win! Rock beats Scissor";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It is a Draw!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "You Lose! Scissor beats Paper";
  } else if (playerSelection === "scissor" && computerSelection === "scissor") {
    return "It is a Draw!";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You Win! Scissor beats Paper";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissor";
  }
}

// console.log(playRound(playerSelection, computerPlay()));

let game = function () {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let result = playRound(playerSelection, computerPlay());
    console.log(result);
    if (result.includes("Win")) {
      playerScore += 1;
    } else if (result.includes("Lose")) {
      computerScore += 1;
    }
  }

  //   console.log(playerScore);
  //   console.log(computerScore);

  if (playerScore > computerScore) {
    console.log("You Win the overall game!");
  } else if (computerScore > playerScore) {
    console.log("You Lost the overall game!");
  } else {
    console.log("Overall game has been Drawn!");
  }
};

game();
