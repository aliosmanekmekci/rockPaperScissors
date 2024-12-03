//Bunun icine random yerlestirecegiz. o da tas, kagit veya makastan bi tanesini sececek.
//ama o randomu nasil atayacagiz, o da var
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {}
//ayni zamanda biz de oynayacagiz o yuzden insan secimi de girilmeli onun icin de bir fonksiyon yaz
function getHumanChoice() {
  let humanChoice = prompt("Enter your choice human! Rock, paper & scissors?");
  switch (humanChoice) {
    case "Rock":
      humanChoice = "Rock";
      break;
    case "Paper":
      humanChoice = "Paper";
      break;
    case "Scissors":
      humanChoice = "Scissors";
      break;
    default:
       humanChoice = "Give me a value dude!";
  }
    console.log(humanChoice)
    return humanChoice;
}

getHumanChoice()
//yani biz simdi playRound'i 3 kere calistiracagiz
function playRound(humanChoice, ComputerChoice) {}
