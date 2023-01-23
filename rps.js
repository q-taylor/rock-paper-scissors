let round_Count = 1;
let player_Count = 0;
let comp_Count = 0;

const results = document.getElementById('results');

const roundNum = document.createElement('h1');
const round_Winner = document.createElement('p');

roundNum.classList.add('roundNum');
roundNum.textContent = `Round ${round_Count} FIGHT!`;

const player_Win = document.createElement('p');
player_Win.classList.add('player_Win');
player_Win.textContent = `Player wins: ${player_Count}`;


const comp_Win = document.createElement('p');
comp_Win.classList.add('comp_Win');
comp_Win.textContent = `Computer wins: ${comp_Count}`;

round_Winner.classList.add('round_Winner');



results.appendChild(roundNum);
results.appendChild(player_Win);
results.appendChild(comp_Win);
results.appendChild(round_Winner);

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
    
    if (playerSelection === computerChoice) {
        winner = 'It\'s a tie!';
    } else if (playerSelection == 'rock' && computerChoice == 'paper') {
        winner = 'You lose!! Paper covers rock.'
        comp_Count++;
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') {
        winner = 'You win!! Rock smashes scissors.';
        player_Count++;
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        winner = 'You win!! Paper covers rock.';
        player_Count++;
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        winner = 'You lose!! Scissors cut paper.';
        comp_Count++;
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        winner = 'You lose!! Rock smashes scissors';
        comp_Count++;
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        winner = 'You win!! Scissors cut paper.';
        player_Count++;
    } else {
        winner = 'You didn\'t enter a valid choice, try again!';
    }
    if (player_Count === 5) {
        endGame();
        return;
    } else if (comp_Count === 5) {
        endGame();
        return;

    }
    round_Winner.textContent = winner;
    round_Count++;
    roundNum.textContent = `Round ${round_Count}`;
    player_Win.textContent = `Player wins: ${player_Count}`;
    comp_Win.textContent = `Computer wins: ${comp_Count}`;
    return winner;
    
}

function endGame () {
    const mainPage = document.getElementById('main-page');
    mainPage.textContent = 'GAME OVER';
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