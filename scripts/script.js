// This function should return 'rock', 'paper', 'scissors'.
function getComputerChoice() {
    // Populating Choices array with all possible combinations.
    const choices = ['rock', 'paper', 'scissors'];
    // Generating random index
    const randomIndex = Math.floor(Math.random() * 100) % 3;
    return choices[randomIndex];
}

// Write the logic to get the human choice
function getHumanChoice() {
    const humanChoice = prompt("Choose between rock, paper or scissors: ");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        console.log(`Tie! You both chose ${humanChoice}`);
        return;
    }

    switch (humanChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                computerScore++;
                console.log("You lose! Paper beats Rock");
            } else {
                humanScore++;
                console.log("You win! Rock beats Scissors");
            }
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                computerScore++;
                console.log("You lose! Scissors beats Paper");
            } else {
                humanScore++;
                console.log("You win! Paper beats Rock");
            }
            break;
        case 'scissors':
            if (computerChoice == 'rock') {
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            } else {
                humanScore++;
                console.log("You win! scissors beats paper");
            }
    }
}

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

