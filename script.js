// Firstly: Creating the logic to obtain the computer's choice

function getComputerChoice() {
    let table = ["Rock", "Paper", "Scissors"];
    return table[Math.floor(Math.random() * table.length)]
}

// Secondly: Initialization of the variable representing the score of each game.

let humanScore = 0;
let computerScore = 0;

// Thirdly: logic to play a single round

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if ((human === "rock" && computer === "paper") || 
    (human === "scissors" && computer === "rock") || 
    (human === "paper" && computer === "scissors")) {
        console.log("Vous avez perdu la partie !");
        computerScore++;
    } else if ( (computer === "rock" && human === "paper") || 
    (computer === "scissors" && human === "rock") || 
    (computer === "paper" && human === "scissors") ) {
        console.log("Vous avez gagné la partie !");
        humanScore++;
    } else {
        console.log("La partie est nulle.\nPas de gagnant");
    }
}

const allSelection = document.querySelectorAll("button");

allSelection.forEach((playerSelection) => {
    playerSelection.addEventListener("click", () => {
        const humanSelection = playerSelection.textContent.trim();
        playRound(humanSelection, getComputerChoice());
    });
});
