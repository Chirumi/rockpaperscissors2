function playRound() { // Plays a round of rock, paper, scissors
    let playerPrompt = prompt("Choose: Rock, Paper or Scissors") // Stores our input of rock, paper or scissors
    let playerSelection = playerPrompt.toLowerCase()

    function getComputerChoice() { // Computer's choices of rock, paper or sicssors
        let randomNumber = Math.floor(Math.random()*3)
        if (randomNumber === 0) {
            return "rock"
        }
        else if (randomNumber === 1) {
            return "paper"
        } 
        else {
            return "scissors"
        }
    }
    let computerSelection = getComputerChoice()

    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("You've picked rock!")
        console.log("Computer picked rock!")
        console.log("Tied round!")
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You've picked rock!")
        console.log("Computer picked paper!")
        computerScore++
        console.log("You lost the round!")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You've picked rock!")
        console.log("Computer picked scissors!")
        playerScore++
        console.log("You won the round!")
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You've picked paper!")
        console.log("Computer picked rock!")
        playerScore++
        console.log("You won the round!")
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("You've picked paper!")
        console.log("Computer picked paper!")
        console.log("Tied round!")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You've picked paper!")
        console.log("Computer picked scissors!")
        computerScore++
        console.log("You lost the round!")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You've picked scissors!")
        console.log("Computer picked rock!")
        computerScore++
        console.log("You lost the round!")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You've picked scissors!")
        console.log("Computer picked paper!")
        playerScore++
        console.log("You won the round!")
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("You've picked scissors!")
        console.log("Computer picked scissors!")
        console.log("Tied round!")
    }
    else {
        console.log("Choose between Rock, Paper or Scissors!")
    }
}

let playerScore = 0
let computerScore = 0

function winner() {
    if (playerScore < computerScore) {
        console.log("YOU'VE LOST THE GAME!")
    } 
    else if (playerScore > computerScore) {
        console.log("YOU'VE WON THE GAME!")
    }
    else {
        console.log("THE GAME IS TIED!")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
        console.log(playerScore)
        console.log(computerScore)
    }
    winner()
}

game()






