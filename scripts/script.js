// This function should return 'rock', 'paper', 'scissors'.
function getComputerChoice() {
    // Populating Choices array with all possible combinations.
    choices = ['rock', 'paper', 'scissors'];
    // Generating random index
    randomIndex = Math.floor(Math.random() * 100) % 3;
    return choices[randomIndex];
}

console.log(getComputerChoice());