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

// Write the logic to play the entire game
function playgame() {
    // Declare the players global score variables
    let humanScore = 0;
    let computerScore = 0;

    const totalRoundsPlayed = 5;
    let roundCount = 0;

    while (roundCount < totalRoundsPlayed) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        winner = playRound(humanSelection, computerSelection);

        if (winner === 'tie') {
            humanScore++;
            computerScore++;
            roundCount++;
            continue;
        }

        winner == 'human' ? humanScore++ : computerScore++;

        roundCount++;
    }

    declareWinner(humanScore, computerScore);
}

// Start game
playgame();


