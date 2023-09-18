// Make retry button functionality

let playerScore = 0
let computerScore = 0
let retry = 0 // If value is 0, retry button will appear. If value is 1, retry button will not appear

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const playerChoice = document.querySelector(".playerChoice")
const computerChoice = document.querySelector(".computerChoice")
const result = document.querySelector(".result")
const pScore = document.querySelector(".pScore")
const cScore = document.querySelector(".cScore")
const gameResult = document.querySelector(".gameResult")
const scores = document.querySelector(".scores")

rock.addEventListener("click", () => {playRound("rock")})
paper.addEventListener("click", () => {playRound("paper")})
scissors.addEventListener("click", () => {playRound("scissors")})

function playRound(weaponChoice) { // Plays a round of rock, paper, scissors
    if ((!(playerScore == 5 || computerScore == 5)) && retry == 0) {
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
            result.innerHTML = "Result: TIED ROUND!"
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            playerChoice.innerHTML = "You chose: ROCK"
            computerChoice.innerHTML = "Computer chose: PAPER"
            computerScore++
            result.innerHTML = "Result: YOU LOST THE ROUND!"
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerChoice.innerHTML = "You chose: ROCK"
            computerChoice.innerHTML = "Computer chose: SCISSORS"
            playerScore++
            result.innerHTML = "Result: YOU WON THE ROUND!"
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            playerChoice.innerHTML = "You chose: PAPER"
            computerChoice.innerHTML = "Computer chose: ROCK"
            playerScore++
            result.innerHTML = "Result: YOU WON THE ROUND!"
        }
        else if (playerSelection === "paper" && computerSelection === "paper") {
            playerChoice.innerHTML = "You chose: PAPER"
            computerChoice.innerHTML = "Computer chose: PAPER"
            result.innerHTML = "Result: TIED ROUND!"
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            playerChoice.innerHTML = "You chose: PAPER"
            computerChoice.innerHTML = "Computer chose: SCISSORS"
            computerScore++
            result.innerHTML = "Result: YOU LOST THE ROUND!"
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            playerChoice.innerHTML = "You chose: SCISSORS"
            computerChoice.innerHTML = "Computer chose: ROCK"
            computerScore++
            result.innerHTML = "Result: YOU LOST THE ROUND!"
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerChoice.innerHTML = "You chose: SCISSORS"
            computerChoice.innerHTML = "Computer chose: PAPER"
            playerScore++
            result.innerHTML = "Result: YOU WON THE ROUND!"
        }
        else if (playerSelection === "scissors" && computerSelection === "scissors") {
            playerChoice.innerHTML = "You chose: SCISSORS"
            computerChoice.innerHTML = "Computer chose: SCISSORS"
            result.innerHTML = "Result: TIED ROUND!"
        }
        else {
            console.log("Choose between Rock, Paper or Scissors!")
        }

        pScore.innerHTML = `Your score: ${playerScore}`
        cScore.innerHTML = `Your score: ${computerScore}`
        winner()
    }
    else {
        if ((playerScore == 5 || computerScore == 5) && retry == 0) {
            let retryButton = document.createElement("button")
            retryButton.innerHTML = "RETRY"
            retryButton.addEventListener("click", () => {
                
            })
            scores.appendChild(retryButton)
            retry = 1
        }
    }
}

function winner() {
    if (computerScore == 5) {
        gameResult.innerHTML = "YOU LOST THE GAME!"
    } 
    else if (playerScore == 5) {
        gameResult.innerHTML = "YOU WON THE GAME!"
    }
}







