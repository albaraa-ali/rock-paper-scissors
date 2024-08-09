//get the human choice
function getHumanChoice() {
    return prompt("What do you choose, 1.rock, 2.paper, or 3.scissors?: ");
}

//get the computer choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}
//declare both players' score
let humanScore = 0;
let computerScore = 0;
//make a play round function
function playRound() {
    if (getHumanChoice() == getComputerChoice()) {
        console.log("This round is a draw")
    } else if ((getHumanChoice() == 1 && getComputerChoice() == 3) || (getHumanChoice() == 2 && getComputerChoice() == 1) || (getHumanChoice() == 3 && getComputerChoice() == 2)) {
        humanScore++;
        console.log("You won this round!!")
    } else {
        computerScore++;
        console.log("better luck next time")
    }
}
//play the game for 5 rounds
function playGame() {
    for (let index = 0; index < 5; index++) {
        playRound();
        if (humanScore == 3 || computerScore == 3) {
            console.log()
            break;
        }
    }
    if (humanScore > computerScore) {
        console.log("You win the game!!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game")
    } else {
        console.log("it's a tie")
    }
}
playGame();
