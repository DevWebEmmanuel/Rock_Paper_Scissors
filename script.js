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

const container = document.querySelector("body");

const elementDiv = document.createElement("div"),
      elementPUser = document.createElement("p"),
      elementPComp = document.createElement("p");

const allSelection = document.querySelectorAll("button");

allSelection.forEach((playerSelection) => {

    const handleClick = () => {
        if (humanScore < 5 && computerScore < 5) {

            const humanSelection = playerSelection.textContent.trim();
            playRound(humanSelection, getComputerChoice());

            elementPUser.textContent = "User: " + humanScore;
            elementPComp.textContent = "Computer: " + computerScore;

            elementDiv.appendChild(elementPComp);
            elementDiv.appendChild(elementPUser);

            container.appendChild(elementDiv);
        } else {
            const end = document.createElement("p");

            end.textContent = "Le jeu est terminé \n";
            end.textContent += (humanScore > computerScore) ? " Vous avez gagné !": " Vous avez perdue !";
            
            elementDiv.appendChild(end);
            container.appendChild(elementDiv);
           
            allSelection.forEach((selection) => {
                selection.removeEventListener("click", handleClick);
            });
        };        
    };
    playerSelection.addEventListener("click", handleClick);
});

