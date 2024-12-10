let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}
function getHumanChoice() {
  let humanInput = prompt("Rock, paper or scissors?");
  if (humanInput.toLowerCase() === "rock" || "paper" || "scissors") {
    return humanInput.toLowerCase();
  } else {
    console.log("Invalid input! Please write a valid choice!");
  }
}
function playRound() {
  const humanHand = getHumanChoice();
  const computerHand = getComputerChoice();
  if (humanHand === computerHand) {
    console.log(`It's a tie!`);
  } else if (
    (humanHand === "rock" && computerHand === "scissors") ||
    (humanHand === "paper" && computerHand === "rock") ||
    (humanHand === "scissors" && computerHand === "paper")
  ) {
    console.log(`Human win! (human choice) ${humanHand} beats (computer choice) ${computerHand}`);
    humanScore++;
  } else if (
    (computerHand === "rock" && humanHand === "scissors") ||
    (computerHand === "paper" && humanHand === "rock") ||
    (computerHand === "scissors" && humanHand === "paper")
  ) {
    console.log(`Computer win! ${computerHand} beats ${humanHand}`);
    computerScore++;
  } else {
    console.log(`Invalid Value!`);
    computerScore = 0;
    humanScore = 0;
    playGame();
  }
}

function playGame() {
  for (let i = 1; i <= 3; i++) {
    playRound();
  }
  console.log(`computer: ${computerScore} & human: ${humanScore}`);
  if (humanScore > computerScore) {
    console.log(`Game is finished! LAST RESULT: Human win! I mean you!! With the score of ${humanScore}`);
  } else {
    console.log(`Game is finished! LAST RESULT: Computer win!😀`);
  }
}

playGame();
