let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice;
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Scissors";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    default:
      computerChoice = "No value found.";
  }
  console.log(computerChoice);
  return computerChoice;
}

getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice human! Rock, paper & scissors?");
  switch (humanChoice) {
    case "Rock":
      break;
    case "Paper":
      break;
    case "Scissors":
      break;
    default:
      console.error("Give me a proper hand dude!This doesn't count!");
  }

  return humanChoice;
}

console.log(getHumanChoice());

//yani biz simdi playRound'i 3 kere calistiracagiz
function playRound(humanChoice, ComputerChoice) {}
