// Firstly: Creating the logic to obtain the computer's choice

function getComputerChoice() {
    let table = ["Rock", "Paper", "Scissors"];
    return table[Math.floor(Math.random() * table.length)]
}
