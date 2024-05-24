function getComputerChoice() {
    let randNum = Math.random()
    switch(true) {
        case (randNum < (1/3)):
            return "rock";
            break;
        case ((1/3) < randNum && randNum < (2/3)):
            return "paper"
            break;
        case ((2/3) < randNum):
            return "scissors";
            break;
        default:
            "Bozo"
    }
};

function getHumanChoice() {
    let val = prompt("Rock, Paper or Scissors?" ,"").toLowerCase()
    return val
};

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++
            return "You lost!";
        } else {
            humanScore++
            return "You won!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++
            return "You lost!";
        } else {
            humanScore++
            return "You won!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++
            return "You lost!";
        } else {
            humanScore++
            return "You won!";
        }
    };
};

let hV = getHumanChoice();
let cV = getComputerChoice();



function playGame() {
    for (let i = 0; i==5; i++) {
        playRound(hV, cV);
        console.log(playRound(hV, cV));
        console.log(computerScore);
        console.log(humanScore);
    }
}

playGame()