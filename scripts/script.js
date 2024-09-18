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
        console.log(`Tie! You both chose ${humanChoice}`);
        return 'tie';
    }

    switch (humanChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                console.log("You lose! Paper beats Rock");
                return 'computer';
            } else {
                console.log("You win! Rock beats Scissors");
                return 'human';
            }
        case 'paper':
            if (computerChoice == 'scissors') {
                console.log("You lose! Scissors beats Paper");
                return 'computer';
            } else {
                console.log("You win! Paper beats Rock");
                return 'human';
            }
        case 'scissors':
            if (computerChoice == 'rock') {
                console.log("You lose! Rock beats Scissors");
                return 'computer';
            } else {
                console.log("You win! scissors beats paper");
                return 'human';
            }
    }
}

// Declaring the winner
function declareWinner(humanScore, computerScore) {
    const result = `${humanScore}-${computerScore}`;
    if (humanScore > computerScore) {
        console.log(`You win! with a result of ${result}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose :( with a result of ${result}`)
    } else {
        console.log(`It's a Tie! with a result of ${result}`)
    }
}

const choices = document.querySelector(".choices");

choices.addEventListener("click", event => {
    const computerSelection = getComputerChoice();
    const humanSelection = event.target.textContent.toLowerCase();
    playRound(humanSelection, computerSelection);
})


