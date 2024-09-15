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
    return humanChoice;
}