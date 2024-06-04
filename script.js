let rounds = 0;
let computerWins = 0;
let humanWins = 0;

const outcome = document.querySelector("#final")
const finalValue = document.createElement("span")
const matchData = document.querySelector("#data")
const round = document.createElement("span")
const playerScore = document.createElement("span")
const computerScore = document.createElement("span")

matchData.appendChild(round)
matchData.appendChild(playerScore)
matchData.appendChild(computerScore)

function getComputerChoice() {
    let randNum = Math.random()
    switch(true) {
        case (randNum < (1/3)):
            return "100";
            break;
        case ((1/3) < randNum && randNum < (2/3)):
            return "010"
            break;
        case ((2/3) < randNum):
            return "001";
            break;
    }
};


let button = document.querySelector("#buttons");
button.addEventListener("click", (event) => {sessionStorage
    if (computerWins < 5 && humanWins < 5) {
        const win = [10, 20, 33];
        const lose = [12, 17, 34];
        let target = event.target;
        let value = toBinary(target.id);
        if (win.includes(value)) {
            humanWins++
            console.log("Win");
        } else if (lose.includes(value)) {
            computerWins++
            console.log("Lose")
        } else {
            console.log("Draw")
        };
        if (computerWins == 5 || humanWins == 5) {
            console.log("OVER")
            final(humanWins)
        }
        rounds++
        console.log("Rounds " +rounds)
        console.log("Human " +humanWins)
        console.log("Bot " +computerWins)
        } else {
            rounds = 0;
            computerWins = 0;
            humanWins = 0;
            finalValue.textContent = ""
        }
        round.textContent = `Round ${rounds}\n`
        playerScore.textContent = `Player score: ${humanWins}\n`
        computerScore.textContent = `Computer score: ${computerWins}\n`

}
);

function toBinary(hC) {
    console.log(hC)
    let cC = getComputerChoice()
    console.log(cC)
    let binVal = ''
    switch(hC) {
        case 'rock':
            binVal = `100${cC}`;
            break;
        case 'paper':
            binVal = `010${cC}`;
            break;
        case 'scissors':
            binVal = `001${cC}`;
            break;
    }
    let decVal = parseInt(binVal, 2);
    console.log(decVal)
    return decVal;
}

function final(humanWins) {
    if (humanWins == 5) {
        finalValue.textContent = "You won!"
    } else {
        finalValue.textContent = "You lost!"
    }
    outcome.appendChild(finalValue)
}