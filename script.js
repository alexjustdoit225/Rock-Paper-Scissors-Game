// create an array storing rock, paper, scissors
const choices = ['ROCK', 'PAPER', 'SCISSORS']; 
let computerChoice = generateComputerChoice();
let userChoice; 
let popUpMessage;  

function generateComputerChoice() {
    // create a variable that stores a random number between 0 and 2
    const randNum = Math.floor(Math.random()*3);  
    // console.log(choices[randNum]); 
    //choice should return rock, paper, or scissors
    return choices[randNum];  
};

/* create a function called prompt that prompts the user and takes 
   in the parameter of a message, so that you can use the prompt() function throughout your code */
function message() {
    /* create playerSelection variable that prompts the user to enter rock, paper, or scissors
       make sure it is not case sensitive use - variableName.toUpperCase() on the playerSelection variable */
    let message = prompt('ROCK, PAPER, OR SCISSORS?').toUpperCase();
    message = message.toUpperCase();
    console.log(message);
    return message; 
}
message();

// write a function that plays one round of rock, paper, scissors and returns the round winner text
function roundWinner(playerSelection) { 
    const computerSelection = computerPlay();
    // create if statements to determine what the roundWinnerText variable will say 
    if ((computerSelection === 'ROCK') && (playerSelection === 'PAPER')){
        console.log(computerSelection);
        return 'You Win! Paper covers rock.';
    }
    else if ((computerSelection === 'ROCK') && (playerSelection === 'SCISSORS')){
        console.log(computerSelection)
        return 'You Lose! Rock smashes scissors.';
    }
    // else if ((computerSelection === 'PAPER') && (playerSelection === 'SCISSORS')){
    //     return 'You Win! Scissors slices paper.';
    // }
    // else if ((computerSelection === 'PAPER') && (playerSelection === 'ROCK')){
    //     return 'You Lose! Paper cover rock.'; 
    // }
    // else if ((computerSelection === 'SCISSORS') && (playerSelection === 'ROCK')){
    //     return 'You Win! Rock smashes scissors.';
    // }
    // else if ((computerSelection === 'SCISSORS') && (playerSelection === 'PAPER')){
    //     return 'You Lose! Scissors slices paper.';
    // } 
    // else if ((computerSelection === playerSelection)) {
    //     return `It's a tie.`
    // }
    else {
        return `You did not pick ROCK, PAPER, or SCISSORS.`
    }
};


// function game() { 
//     let playerSelection = message();     
//     // const message = prompt('ROCK, PAPER, OR SCISSORS?').toUpperCase();
//     const output = (`Player: ${playerSelection}
// Bot Choice: ${computerPlay()}
// ${roundWinner(playerSelection)}`);
//     console.log(output); 
// };
// // to make the game loop just put the game function in a for loop
// game(); 