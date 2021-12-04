const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// Event Listeners
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);

// Game Logic
function computerPlay() {
  //  MAKES THE COMPUTER RETURN A RANDOM VALUE FROM THE ARRAY
  const arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

// player and computer initial scores
let playerScore = 0;
let computerScore = 0;

const results = document.querySelector(".result");
const results2 = document.querySelector(".result2");
const results3 = document.querySelector(".result3");

results2.setAttribute("style", "font-size:2rem");

// Player score Dom
const score1 = document.createElement("p");
score1.textContent = "Player Score: " + playerScore;
results.appendChild(score1);

// Computer score Dom
const score2 = document.createElement("p");
score2.textContent = "Computer Score: " + computerScore;
results.appendChild(score2);

// DOM elements
const para = document.createElement("p");
const winner = document.createElement("h2");

// Play rock function
function playRock() {
  para.style.fontSize = "2rem";
  const playerSelection = "rock";
  const computerSelection = computerPlay();

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
      playerScore++;
      score1.textContent = "Player Score: " + playerScore;
      return "You Win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++;
      score2.textContent = "Computer Score: " + computerScore;
      return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
      return "It's a Draw";
    }
  }

  para.textContent = playRound(playerSelection, computerSelection);
  results2.appendChild(para);

  if (playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    para.textContent = "YOU WON THE GAME";
    para.style.fontSize = "3rem";
    score1.textContent = "Player Score: " + playerScore;
    score2.textContent = "Computer Score: " + computerScore;
  } else if (computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    para.textContent = "GAME OVER! YOU LOST";
    para.style.fontSize = "3rem";
    score1.textContent = "Player Score: " + playerScore;
    score2.textContent = "Computer Score: " + computerScore;
  }
}

// Play paper function
function playPaper() {
  para.style.fontSize = "2rem";
  const playerSelection = "paper";
  const computerSelection = computerPlay();

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "scissors") {
      computerScore++;
      score2.textContent = "Computer Score: " + computerScore;
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++;
      score1.textContent = "Player Score: " + playerScore;
      return "You Win! Paper beats Rock";
    } else {
      return "It's a Draw";
    }
  }
  para.textContent = playRound(playerSelection, computerSelection);
  results2.appendChild(para);

  if (playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    para.textContent = "YOU WON THE GAME";
    para.style.fontSize = "3rem";
    score1.textContent = "Player Score: " + playerScore;
    score2.textContent = "Computer Score: " + computerScore;
  } else if (computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    para.textContent = "GAME OVER! YOU LOST";
    para.style.fontSize = "3rem";
    score1.textContent = "Player Score: " + playerScore;
    score2.textContent = "Computer Score: " + computerScore;
  }
}

// Play scissors function
function playScissors() {
  para.style.fontSize = "2rem";
  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == "scissors" && computerSelection == "rock") {
      computerScore++;
      score2.textContent = "Computer Score: " + computerScore;
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      playerScore++;
      score1.textContent = "Player Score: " + playerScore;
      return "You Win! Scissors beats Paper";
    } else {
      return "It's a Draw";
    }
  }
  para.textContent = playRound(playerSelection, computerSelection);
  results2.appendChild(para);

  if (playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    para.textContent = "YOU WON THE GAME";
    para.style.fontSize = "3rem";
    score1.textContent = "Player Score: " + playerScore;
    score2.textContent = "Computer Score: " + computerScore;
  } else if (computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    para.textContent = "GAME OVER! YOU LOST";
    para.style.fontSize = "3rem";
    score1.textContent = "Player Score: " + playerScore;
    score2.textContent = "Computer Score: " + computerScore;
  }
}
