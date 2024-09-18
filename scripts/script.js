// This function should return 'rock', 'paper', 'scissors'.
function getComputerChoice() {
    // Populating Choices array with all possible combinations.
    const choices = ['rock', 'paper', 'scissors'];
    // Generating random index
    const randomIndex = Math.floor(Math.random() * 100) % 3;
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultMsg.textContent = `Tie! You both chose ${humanChoice}`;
        return 'tie';
    }

    switch (humanChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                resultMsg.textContent = "You lose! Paper beats Rock";
                return 'computer';
            } else {
                resultMsg.textContent = "You win! Rock beats Scissors";
                return 'human';
            }
        case 'paper':
            if (computerChoice == 'scissors') {
                resultMsg.textContent = "You lose! Scissors beats Paper";
                return 'computer';
            } else {
                resultMsg.textContent = "You win! Paper beats Rock";
                return 'human';
            }
        case 'scissors':
            if (computerChoice == 'rock') {
                resultMsg.textContent = "You lose! Rock beats Scissors";
                return 'computer';
            } else {
                resultMsg.textContent = "You win! scissors beats paper";
                return 'human';
            }
    }
}

// Declaring the winner
function declareWinner(humanScore, computerScore) {
    const result = `${humanScore}-${computerScore}`;
    if (humanScore > computerScore) {
        resultMsg.style.color = 'green';
        resultMsg.textContent = `You win! with a result of ${result}`;
    } else if (humanScore < computerScore) {
        resultMsg.style.color = 'red';
        resultMsg.textContent = `You lose :( with a result of ${result}`;
    } else {
        resultMsg.style.color = 'blue';
        resultMsg.textContent = `It's a Tie! with a result of ${result}`;
    }
}

const choices = document.querySelector(".choices");
const resultMsg = document.querySelector("#resultMsg");
const score = document.querySelector(".score");

let humanScore = 0;
let computerScore = 0;

function addScore(roundWinner) {
    if (roundWinner === 'tie') {
        humanScore++;
        computerScore++;
    } else if (roundWinner == 'computer') {
        computerScore++;
    } else {
        humanScore++;
    }
}

choices.addEventListener("click", event => {
    if (humanScore === 0 || computerScore === 0) {
        resultMsg.style.color = 'black';
    }

    const computerSelection = getComputerChoice();
    const humanSelection = event.target.textContent.toLowerCase();
    let roundWinner = playRound(humanSelection, computerSelection);

    addScore(roundWinner);
    score.textContent = `You: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        declareWinner(humanScore, computerScore);
        humanScore = 0;
        computerScore = 0;
    }
})


