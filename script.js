// Firstly: Creating the logic to obtain the computer's choice

function getComputerChoice() {
    let table = ["Rock", "Paper", "Scissors"];
    return table[Math.floor(Math.random() * table.length)]
}

// Secondly: Creating the logic to obtain the human's choice 

function getHumanChoice() {
    let message = prompt("Choose between 'Rock', 'Paper' and 'Scissors': ");
    return message
}

// Thirdly: Initialization of the variable representing the score of each game.

let humanScore = 0;
let computerScore = 0;