function game() {
    function getComputerChoice() {
        const randomNumber = Math.random()
        if (randomNumber <= (1/3)) {
            return "rock"
        } else if (randomNumber > (2/3)) {
            return "paper"
        } else {
            return "scissors"
        }
    }
    
    function playerSelection() {
        return prompt("Rock, Paper, or Scissors?").toLowerCase()
    }
    
    function playRound(playerSelection, computerSelection ) {
        console.log(playerSelection)
        console.log(computerSelection)
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                return "You win! Rock smashes Scissors"
            } else if (computerSelection === "paper") {
                return "You lose! Paper covers Rock"
            } else {
                return "Tie!"
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return "You lose! Scissors cut Paper"
            } else if (computerSelection === "paper") {
                return "Tie!"
            } else {
                return "You Win! Paper covers Rock"
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "scissors") {
                return "Tie!"
            } else if (computerSelection === "paper") {
                return "You win! Scissors cut Paper"
            } else {
                return "You lose! Rock smashes Scissors"
            }
        } else {
            return "Not a valid entry"
        }
        
    }
    
    console.log(playRound(playerSelection(), getComputerChoice()))
}


function playGame() {
    for (let i=0; i < 5; i++ ) {
        game()
    }
}

playGame()