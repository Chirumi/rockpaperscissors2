let playerScore = 0
let computerScore = 0

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const playerChoice = document.querySelector(".playerChoice")
const computerChoice = document.querySelector(".computerChoice")
const result = document.querySelector(".result")

rock.addEventListener("click", () => {playRound("rock")})
paper.addEventListener("click", () => {playRound("paper")})
scissors.addEventListener("click", () => {playRound("scissors")})

function playRound(weaponChoice) { // Plays a round of rock, paper, scissors
    let playerSelection = weaponChoice

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
        playerChoice.innerHTML = "You chose: ROCK"
        computerChoice.innerHTML = "Computer chose: ROCK"
        result.innerHTML = "Result: TIED!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        playerChoice.innerHTML = "You chose: ROCK"
        computerChoice.innerHTML = "Computer chose: PAPER"
        computerScore++
        result.innerHTML = "Result: YOU LOST!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerChoice.innerHTML = "You chose: ROCK"
        computerChoice.innerHTML = "Computer chose: SCISSORS"
        playerScore++
        result.innerHTML = "Result: YOU WON!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerChoice.innerHTML = "You chose: PAPER"
        computerChoice.innerHTML = "Computer chose: ROCK"
        playerScore++
        result.innerHTML = "Result: YOU WON!"
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        playerChoice.innerHTML = "You chose: PAPER"
        computerChoice.innerHTML = "Computer chose: PAPER"
        result.innerHTML = "Result: TIED!"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        playerChoice.innerHTML = "You chose: PAPER"
        computerChoice.innerHTML = "Computer chose: SCISSORS"
        computerScore++
        result.innerHTML = "Result: YOU LOST!"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        playerChoice.innerHTML = "You chose: SCISSORS"
        computerChoice.innerHTML = "Computer chose: ROCK"
        computerScore++
        result.innerHTML = "Result: YOU LOST!"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerChoice.innerHTML = "You chose: SCISSORS"
        computerChoice.innerHTML = "Computer chose: PAPER"
        playerScore++
        result.innerHTML = "Result: YOU WON!"
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        playerChoice.innerHTML = "You chose: SCISSORS"
        computerChoice.innerHTML = "Computer chose: SCISSORS"
        result.innerHTML = "Result: TIED!"
    }
    else {
        console.log("Choose between Rock, Paper or Scissors!")
    }
}

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

// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound()
//         console.log(`
//         -----
//         Player: ${playerScore}`)
//         console.log(`
//         Computer: ${computerScore}
//         -----`)
//     }
//     winner()
// } 







