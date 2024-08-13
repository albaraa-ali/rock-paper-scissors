
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

function getHumanChoice(choice) {
    playGame(choice);
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice == computerChoice) {
        result = "It's a draw!";
    } else if (
        (humanChoice == 1 && computerChoice == 3) || // Rock beats Scissors
        (humanChoice == 2 && computerChoice == 1) || // Paper beats Rock
        (humanChoice == 3 && computerChoice == 2)    // Scissors beat Paper
    ) {
        result = "You win!";
        playerScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    // Update the scores
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // Display the result
    resultDisplay.textContent = result;
}

// Add event listeners to each element
rock.addEventListener('click', function () {
    getHumanChoice(1); // 1 for Rock
});
paper.addEventListener('click', function () {
    getHumanChoice(2); // 2 for Paper
});
scissors.addEventListener('click', function () {
    getHumanChoice(3); // 3 for Scissors
});