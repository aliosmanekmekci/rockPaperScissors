let humanScore = 0;
let computerScore = 0;
//For computer choice. It's the first ai that i'm writing lol!
function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  let computerChoice;

  if (num === 0) {
    computerChoice = "rock";
  } else if (num === 1) {
    computerChoice = "scissors";
  } else if (num === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "No value found.";
  }

  console.log("Computer Choice: ", computerChoice);
  return computerChoice.toLowerCase();
}

getComputerChoice();
//For our human to choose their choice, nice ain't it?
function getHumanChoice() {
  let humanChoice = prompt(
    "Enter your choice human! Rock, paper, scissors? You can also choose with numbers: 1 for Rock, 2 for Paper, 3 for Scissors."
  ).toLowerCase();

  if (humanChoice.toLowerCase() === "rock" || humanChoice === "1") {
    humanChoice = "rock";
  } else if (humanChoice.toLowerCase() === "paper" || humanChoice === "2") {
    humanChoice = "paper";
  } else if (humanChoice.toLowerCase() === "scissors" || humanChoice === "3") {
    humanChoice = "scissors";
  } else {
    console.error("Invalid choice! Please choose Rock, Paper, or Scissors.");
    return getHumanChoice();
  }
  console.log("Human Choice: ", humanChoice);
  return humanChoice.toLowerCase();
}
//The game phase logic; this is where every action began
function playRound(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    console.log(`You lost dude! ${computerChoice} beats ${humanChoice}. Careful human! ):`);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
