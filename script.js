let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {}

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
