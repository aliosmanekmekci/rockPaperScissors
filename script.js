// Scores
let humanScore = 0;
let computerScore = 0;

// Container for buttons and score display
const container = document.querySelector("#container");

// Create elements for displaying scores
const computerScoreDisplay = document.createElement("p");
const humanScoreDisplay = document.createElement("p");
const winnerDisplay = document.createElement("p");

computerScoreDisplay.textContent = `Computer: ${computerScore}`;
humanScoreDisplay.textContent = `Human: ${humanScore}`;
winnerDisplay.textContent = "";

container.appendChild(computerScoreDisplay);
container.appendChild(humanScoreDisplay);
container.appendChild(winnerDisplay);

// Function to get the computer's choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

// Function to check for a winner
function checkWinner() {
  const resultDisplay = document.querySelector("#result");

  if (humanScore + computerScore === 5 && humanScore > computerScore) {
    winnerDisplay.textContent = "Human wins the game!";
    disableButtons();
    resultDisplay.textContent = "";
  } else if (computerScore + humanScore === 5 && computerScore > humanScore) {
    winnerDisplay.textContent = "Computer wins the game!";
    disableButtons();
    resultDisplay.textContent = "";
  }
}

// Function to disable buttons after the game ends
function disableButtons() {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((button) => (button.disabled = true));
}

// Function to play a round
function playRound(humanHand) {
  const computerHand = getComputerChoice();

  let resultMessage = "";
  if (humanHand === computerHand) {
    resultMessage = `It's a tie! Both chose ${humanHand}.`;
  } else if (
    (humanHand === "rock" && computerHand === "scissors") ||
    (humanHand === "paper" && computerHand === "rock") ||
    (humanHand === "scissors" && computerHand === "paper")
  ) {
    resultMessage = `Human wins! ${humanHand} beats ${computerHand}.`;
    humanScore++;
  } else {
    resultMessage = `Computer wins! ${computerHand} beats ${humanHand}.`;
    computerScore++;
  }

  // Update score displays
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  humanScoreDisplay.textContent = `Human: ${humanScore}`;

  // Display result message
  const resultDisplay = document.querySelector("#result") || document.createElement("p");
  resultDisplay.id = "result";
  resultDisplay.textContent = resultMessage;
  container.appendChild(resultDisplay);

  // Check for a winner
  checkWinner();
}

// Function to create buttons dynamically
function createButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", () => {
    playRound(text.toLowerCase()); // Pass the button text as human choice
  });
  return button;
}

// Create buttons for "rock", "paper", "scissors" and append them to the container
["Rock", "Paper", "Scissors"].forEach((choice) => {
  const button = createButton(choice);
  container.appendChild(button);
});
