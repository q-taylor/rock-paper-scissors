/* declare variables */
let computerChoice = '';
let playerChoice = '';

/* gets computer choice using random number 1 through 3 and returns to variable computerSelection*/
function getComputerChoice () {
   const rdm = Math.floor(Math.random() * 3) + 1;
   switch (rdm) {
    case 1:
        computerChoice = 'Rock';
        break;
    case 2:
        computerChoice = 'Paper';
        break;
    case 3:
        computerChoice = 'Scissors';
        break;
   }
   console.log(computerChoice);
}
/* gets user choice via console input and returns to variable playerSelection */
/* plays a round of Rock Paper Scissors and returns a string declaring the winner */

