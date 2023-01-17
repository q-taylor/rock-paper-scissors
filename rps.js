
/* gets computer choice using random number 1 through 3 and returns to variable computerSelection*/
function getComputerChoice () {
    const rdm = Math.floor(Math.random() * 3) + 1;
    switch (rdm) {
     case 1:
         rdmChoice = 'rock';
         break;
     case 2:
        rdmChoice = 'paper';
         break;
     case 3:
        rdmChoice = 'scissors';
         break;
    }
   
   return rdmChoice;
}

/* plays a round of Rock Paper Scissors and returns a string declaring the winner */
function playRound (playerSelection) {
    let winner = '';
    const computerChoice = getComputerChoice ();
    console.log(`Player = ${playerSelection}`);
    console.log(`Computer = ${computerChoice}`);
    if (playerSelection === computerChoice) {
        winner = 'It\'s a tie!';
    } else if (playerSelection == 'rock' && computerChoice == 'paper') {
        winner = 'You lose!! Paper covers rock.';
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') {
        winner = 'You win!! Rock smashes scissors.';
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        winner = 'You win!! Paper covers rock.';
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        winner = 'You lose!! Scissors cut paper.';
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        winner = 'You lose!! Rock smashes scissors';
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        winner = 'You win!! Scissors cut paper.';
    } else {
        winner = 'You didn\'t enter a valid choice, try again!';
    }
    console.log(winner);
    return winner;
    
}

/* listen for buttons to be clicked and assigns proper player selection */
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

/* plays a 5 round game */
/*function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt (' Choose your weapon!! Rock, Paper, or Scissors? ');
        getComputerChoice();
        console.log(playRound(computerChoice, playerSelection));
        console.log('Computer choice: ' + computerChoice + '    Player choice: ' + playerSelection);

    }
}*/