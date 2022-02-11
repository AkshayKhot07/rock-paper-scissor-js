"use strict";

let resultDisplay = document.getElementById("result-display");
let matchDisplay = document.getElementById("match-display");

let mortyScore = document.getElementById("morty-score");
let rickScore = document.getElementById("rick-score");

let mortyScoreCount = parseInt(mortyScore.textContent);
let rickScoreCount = parseInt(rickScore.textContent);

let mortyChoice = document.querySelector(".morty-choice");
let rickChoice = document.querySelector(".rick-choice");

let dialog = document.getElementById("favDialog");
let playAgain = document.querySelector(".play-again");
let resultText = document.querySelector(".result-text");

let buttons = Array.from(document.querySelectorAll("button"));

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "mongoose" && computerSelection === "mongoose") {
    return "It is a Draw!";
  } else if (playerSelection === "mongoose" && computerSelection === "hyena") {
    return "You Lose! Hyena beats Mongoose";
  } else if (playerSelection === "mongoose" && computerSelection === "snake") {
    return "You Win! Mongoose beats Snake";
  } else if (playerSelection === "snake" && computerSelection === "snake") {
    return "It is a Draw!";
  } else if (playerSelection === "snake" && computerSelection === "mongoose") {
    return "You Lose! Mongoose beats Snake";
  } else if (playerSelection === "snake" && computerSelection === "hyena") {
    return "You Win! Snake beats Hyena";
  } else if (playerSelection === "hyena" && computerSelection === "hyena") {
    return "It is a Draw!";
  } else if (playerSelection === "hyena" && computerSelection === "snake") {
    return "You Lose! Snake beats Hyena";
  } else if (playerSelection === "hyena" && computerSelection === "mongoose") {
    return "You Win! Hyena beats Mongoose";
  }
}

function computerPlay() {
  const randomnNumber = Math.floor(Math.random() * 3) + 1;
  if (randomnNumber === 1) {
    return "mongoose";
  } else if (randomnNumber === 2) {
    return "snake";
  } else {
    return "hyena";
  }
}

function gamePlay(e) {
  if (mortyScoreCount === 5) {
    resultText.textContent = "You Win!";
    modalGameReset();
    return;
  } else if (rickScoreCount === 5) {
    resultText.textContent = "You Lose!";
    modalGameReset();
    return;
  }

  let animalChoosen = this.id.split("-");
  let animalChoosenValue = animalChoosen[1];
  let computerChoosenValue = computerPlay();
  let result = playRound(animalChoosenValue, computerChoosenValue);
  // console.log(result);

  if (
    animalChoosenValue === "mongoose" &&
    computerChoosenValue === "mongoose" &&
    result.includes("Draw")
  ) {
    resultDisplay.textContent = "It is a Draw!";
    matchDisplay.textContent = "Mongoose against Mongoose";
    mortyChoice.src = "images/mongoose.png";
    rickChoice.src = "images/mongoose.png";
  } else if (
    animalChoosenValue === "mongoose" &&
    computerChoosenValue === "hyena" &&
    result.includes("Lose")
  ) {
    resultDisplay.textContent = "Morty Wounded :(";
    matchDisplay.textContent = "You Lose! Hyena beats Mongoose";
    rickScoreCount += 1;
    rickScore.textContent = rickScoreCount;
    mortyChoice.src = "images/mongoose.png";
    rickChoice.src = "images/hyena.png";
  } else if (
    animalChoosenValue === "mongoose" &&
    computerChoosenValue === "snake" &&
    result.includes("Win")
  ) {
    resultDisplay.textContent = "Morty Kills!";
    matchDisplay.textContent = "You Win! Mongoose beats Snake";
    mortyScoreCount += 1;
    mortyScore.textContent = mortyScoreCount;
    mortyChoice.src = "images/mongoose.png";
    rickChoice.src = "images/snake.png";
  } else if (
    animalChoosenValue === "snake" &&
    computerChoosenValue === "snake" &&
    result.includes("Draw")
  ) {
    resultDisplay.textContent = "It is a Draw!";
    matchDisplay.textContent = "Snake against Snake";
    mortyChoice.src = "images/snake.png";
    rickChoice.src = "images/snake.png";
  } else if (
    animalChoosenValue === "snake" &&
    computerChoosenValue === "mongoose" &&
    result.includes("Lose")
  ) {
    resultDisplay.textContent = "Morty Wounded :(";
    matchDisplay.textContent = "You Lose! Mongoose beats Snake";
    rickScoreCount += 1;
    rickScore.textContent = rickScoreCount;
    mortyChoice.src = "images/snake.png";
    rickChoice.src = "images/mongoose.png";
  } else if (
    animalChoosenValue === "snake" &&
    computerChoosenValue === "hyena" &&
    result.includes("Win")
  ) {
    resultDisplay.textContent = "Morty Kills!";
    matchDisplay.textContent = "You Win! Snake beats Hyena";
    mortyScoreCount += 1;
    mortyScore.textContent = mortyScoreCount;
    mortyChoice.src = "images/snake.png";
    rickChoice.src = "images/hyena.png";
  } else if (
    animalChoosenValue === "hyena" &&
    computerChoosenValue === "hyena" &&
    result.includes("Draw")
  ) {
    resultDisplay.textContent = "It is a Draw!";
    matchDisplay.textContent = "Hyena against Hyena";
    mortyChoice.src = "images/hyena.png";
    rickChoice.src = "images/hyena.png";
  } else if (
    animalChoosenValue === "hyena" &&
    computerChoosenValue === "snake" &&
    result.includes("Lose")
  ) {
    resultDisplay.textContent = "Morty Wounded :(";
    matchDisplay.textContent = "You Loose! Snake beats Hyena";
    rickScoreCount += 1;
    rickScore.textContent = rickScoreCount;

    mortyChoice.src = "images/hyena.png";
    rickChoice.src = "images/snake.png";
  } else if (
    animalChoosenValue === "hyena" &&
    computerChoosenValue === "mongoose" &&
    result.includes("Win")
  ) {
    resultDisplay.textContent = "Morty Kills!";
    matchDisplay.textContent = "You Win! Hyena beats Mongoose";

    mortyScoreCount += 1;
    mortyScore.textContent = mortyScoreCount;
    mortyChoice.src = "images/hyena.png";
    rickChoice.src = "images/mongoose.png";
  }

  if (mortyScoreCount === 5) {
    resultText.textContent = "You Win!";
    modalGameReset();
  } else if (rickScoreCount === 5) {
    resultText.textContent = "You Lose!";
    modalGameReset();
  }
}

buttons.forEach((button) => button.addEventListener("click", gamePlay));
let overlay = document.querySelector(".overlay");

function modalGameReset(e) {
  dialog.show();
  overlay.classList.add("active");

  playAgain.addEventListener("click", startOverAgain);
}

function startOverAgain(e) {
  mortyScoreCount = 0;
  mortyScore.textContent = 0;
  rickScoreCount = 0;
  rickScore.textContent = 0;
  resultDisplay.textContent = "Choose your sacrifice";
  matchDisplay.textContent = "First who does 5 kills, Wins!";
  mortyChoice.src = "images/questionmark1.png";
  rickChoice.src = "images/questionmark1.png";
  dialog.close();
  overlay.classList.remove("active");
}

window.onclick = function (event) {
  if (event.target == overlay) {
    dialog.close();
    overlay.classList.remove("active");
  }
};

////////////////// Trial Error Code ////////////////////////

/*
  if (mortyScoreCount === 5) {
    buttons.forEach((button) =>
      button.removeEventListener("click", gamePlay, true)
    );
      buttons.forEach((button) =>
        button.addEventListener("click", modalGameReset)
      );
  } else if (rickScoreCount === 5) {
    buttons.forEach((button) =>
      button.removeEventListener("click", gamePlay, true)
    );
    resultText.textContent = "You Lose!";
    buttons.forEach((button) =>
      button.addEventListener("click", modalGameReset)
    );
  }
  */

/*
let game = function (e) {
  let mortyScore = parseInt(document.getElementById("morty-score").textContent);
  let rickScore = parseInt(document.getElementById("rick-score").textContent);
  let result = animalChoosen(e);
  console.log(result);
};

let gamePlay = buttons.forEach((button) =>
  button.addEventListener("click", game)
);
*/

/*
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
*/

// buttons.forEach((button) => button.addEventListener("click", animalChoosen));

// buttons.forEach((button) => button.addEventListener("click", computerPlay));

/*
function animalChoosen(value) {
  // let playerSelection;
  // console.log(this.id);

  if (this.id === "play-mongoose") {
    // playerSelection = "mongoose";
    return "mongoose";
  } else if (this.id === "play-snake") {
    // playerSelection = "snake";
    return "snake";
  } else if (this.id === "play-hyena") {
    // playerSelection = "hyena";
    return "hyena";
  }
}

*/
