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

let playerPrompt = prompt("Choose: Rock, Paper or Scissors") // Stores our input of rock, paper or scissors
let playerSelection = playerPrompt.toLowerCase()

let computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("You've picked rock!")
        console.log("Computer picked rock!")
        return "Tied!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You've picked rock!")
        console.log("Computer picked paper!")
        return "You lost!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You've picked rock!")
        console.log("Computer picked scissors!")
        return "You won!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You've picked paper!")
        console.log("Computer picked rock!")
        return "You won!"
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("You've picked paper!")
        console.log("Computer picked paper!")
        return "Tied!"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You've picked paper!")
        console.log("Computer picked scissors!")
        return "You lost!"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You've picked scissors!")
        console.log("Computer picked rock!")
        return "You lost!"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You've picked scissors!")
        console.log("Computer picked paper!")
        return "You won!"
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("You've picked scissors!")
        console.log("Computer picked scissors!")
        return "Tied!"
    }
    else {
        return "Choose between Rock, Paper or Scissors!"
    }
}



