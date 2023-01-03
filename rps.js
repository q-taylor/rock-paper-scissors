/* declare variables */
let computerChoice = '';
let playerSelection = 'rock';



/* gets computer choice using random number 1 through 3 and returns to variable computerSelection*/
function getComputerChoice () {
   const rdm = Math.floor(Math.random() * 3) + 1;
   switch (rdm) {
    case 1:
        computerChoice = 'rock';
        break;
    case 2:
        computerChoice = 'paper';
        break;
    case 3:
        computerChoice = 'scissors';
        break;
   }
   return computerChoice;
}
/* plays a round of Rock Paper Scissors and returns a string declaring the winner */
function playRound (computerChoice, playerSelection) {
    let winner = '';
    const playerSelection2 = playerSelection.toLowerCase();
    if (playerSelection2 === computerChoice) {
        winner = 'It\'s a tie!';
    } else if (playerSelection2 == 'rock' && computerChoice == 'paper') {
        winner = 'You lose!! Paper covers rock.';
    } else if (playerSelection2 == 'rock' && computerChoice == 'scissors') {
        winner = 'You win!! Rock smashes scissors.';
    } else if (playerSelection2 == 'paper' && computerChoice == 'rock') {
        winner = 'You win!! Paper covers rock.';
    } else if (playerSelection2 == 'paper' && computerChoice == 'scissors') {
        winner = 'You lose!! Scissors cut paper.';
    } else if (playerSelection2 == 'scissors' && computerChoice == 'rock') {
        winner = 'You lose!! Rock smashes scissors';
    } else if (playerSelection2 == 'scissors' && computerChoice == 'paper') {
        winner = 'You win!! Scissors cut paper.';
    } else {
        winner = 'You didn\'t enter a valid choice, try again!';
    }
    return winner;
}
/* plays a 5 round game */
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt (' Choose your weapon!! Rock, Paper, or Scissors? ');
        getComputerChoice();
        console.log(playRound(computerChoice, playerSelection));
        console.log('Computer choice: ' + computerChoice + '    Player choice: ' + playerSelection);

    }
}
game();