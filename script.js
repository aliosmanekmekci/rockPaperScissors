let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}
function getHumanChoice() {
  let humanInput = prompt("Rock, paper or scissors?");
  return humanInput.toLowerCase();
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
    console.log(`Human win! ${humanHand} beats ${computerHand}`);
    humanScore++;
  } else {
    console.log(`Human win! ${computerHand} beats ${humanHand}`);
    computerScore++;
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
