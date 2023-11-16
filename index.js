function game() {
    let countWin = 0;
    
    function getComputerChoice() {
        const randomNumber = Math.random();
        if (randomNumber <= (1/3)) {
            return "rock";
        } else if (randomNumber > (2/3)) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    

    function playRound(playerSelection, computerSelection ) {
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                countWin++;
                return {result: "You win! Rock smashes Scissors", player: playerSelection, computer: computerSelection};
            } else if (computerSelection === "paper") {
                return {result: "You lose! Paper covers Rock", player: playerSelection, computer: computerSelection};
            } else {
                return {result: "Tie", player: playerSelection, computer: computerSelection};
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return {result: "You lose! Scissore cut Paper", player: playerSelection, computer: computerSelection};
            } else if (computerSelection === "paper") {
                return {result: "Tie", player: playerSelection, computer: computerSelection};
            } else {
                countWin++;
                return {result: "You win! Paper covers Rock", player: playerSelection, computer: computerSelection};
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "scissors") {
                return {result: "Tie", player: playerSelection, computer: computerSelection};
            } else if (computerSelection === "paper") {
                countWin++;
                return {result: "You win! Scissors cut Paper", player: playerSelection, computer: computerSelection};
            } else {
                return {result: "You lose! Rock smashes Scissors", player: playerSelection, computer: computerSelection};

            }
        } else {
            return "Not a valid entry";
        }
    }

    function alertWinner(winTotal, results) {
        if (winTotal >= 5) {
            results.innerHTML += `<h1>You Won!!!</h1>`;
            countWin = 0;
        }
    }


    function displayResults(result, player, computer, wins) {
        const body = document.querySelector('body'); 
        const results = document.createElement('div')
        results.innerText = `
                                Player: ${player}
                                Computer: ${computer}
                                Result: ${result}
                                Win Total: ${wins}`
        body.appendChild(results)
        alertWinner(wins, results)
    }


    addEventListener('click', (e) => {
        const div = document.querySelector('div')
        function removeDiv() {
            if (div) {
                div.remove();
            }
        }
        switch (e.target.id) {
            case 'rock':
                const rockRound = playRound('rock', getComputerChoice());
                displayResults(rockRound.result, rockRound.player, rockRound.computer, countWin);
                removeDiv();
                break
            case 'paper':
                const paperRound = playRound('paper', getComputerChoice());
                displayResults(paperRound.result, paperRound.player, paperRound.computer, countWin);
                removeDiv();
                break
            case 'scissors':
                const scissorRound = playRound('scissors', getComputerChoice());
                displayResults(scissorRound.result, scissorRound.player, scissorRound.computer, countWin);
                removeDiv();
                break
            default: 
                return;
        }
    })    

}


game()