function computerPlay() {
  //  MAKES THE COMPUTER RETURN A RANDOM VALUE FROM THE ARRAY
  const arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function playerPlay() {
  // CHANGES USER INPUT TO LOWERCASE AND RETURNS IT
  const play = prompt("Choose rock, paper or scissors").toLowerCase();
  if (play == "rock") {
    return "rock";
  } else if (play == "scissors") {
    return "scissors";
  } else if (play == "paper") {
    return "paper";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    // console.log("TEST 1");
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    // console.log("TEST 1");
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    // console.log("TEST 2");
    return "It's a Draw";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    // console.log("TEST 2");
    return "It's a Draw";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    // console.log("TEST 2");
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    // console.log("TEST 2");
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    // console.log("TEST 3");
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    // console.log("TEST 3");
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    // console.log("TEST 3");
    return "It's a Draw";
  } else {
    // console.log("TEST 3");
    return "pick rock, paper or scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    alert("YOU WON THE GAME");
  } else if (computerScore > playerScore) {
    alert("GAME OVER! YOU LOST");
  } else {
    alert("GAME OVER! IT'S A TIE");
  }
}

console.log(game());
