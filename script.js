
//console.log('Hello World')
function computerPlay() {
    // create an array storing rock, paper, scissors
    const choices = ['ROCK', 'PAPER', 'SCISSORS']; 
    // create a variable that stores a random number between 0 and 2
    let randNum = Math.floor(Math.random()*3); 
    // create a variable choice, that uses the random number variable to pick rock, paper, or scissors in the array
    let choice = choices[randNum]; 
    
    return choice; //choice should return rock, paper, or scissors 
};  

/* create a function called prompt that prompts the user and takes 
   in the parameter of a message, so that you can use the prompt() function throughout your code */
// function message() {
//     /* create playerSelection variable that prompts the user to enter rock, paper, or scissors
//        make sure it is not case sensitive use - variableName.toUpperCase() on the playerSelection variable */
//     let message = prompt('ROCK, PAPER, OR SCISSORS?').toUpperCase();
//     console.log(`Player: ${message}`);
//     return message; 
// }

// write a function that plays one round of rock, paper, scissors and returns the round winner text
function roundWinner(playerSelection) { 
    // create if statements to determine what the roundWinnerText variable will say 
    if ((computerPlay() === 'ROCK') &&  (playerSelection === 'PAPER')){
        return 'You Win! Paper covers rock.';
    }
    else if ((computerPlay() === 'ROCK') && (playerSelection === 'SCISSORS')){
        return 'You Lose! Rock smashes scissors.';
    }
    else if ((computerPlay() === 'PAPER') && (playerSelection === 'SCISSORS')){
        return 'You Win! Scissors slices paper.';
    }
    else if ((computerPlay() === 'PAPER') && (playerSelection === 'ROCK')){
        return 'You Lose! Paper cover rock.'; 
    }
    else if ((computerPlay() === 'SCISSORS') && (playerSelection === 'ROCK')){
        return 'You Win! Rock smashes scissors.';
    }
    else if ((computerPlay() === 'SCISSORS') && (playerSelection === 'PAPER')){
        return 'You Lose! Scissors slices paper.';
    } 
    else if ((computerPlay() === playerSelection)) {
        return `It's a tie.`
    }
    else {
        return `You did not pick ROCK, PAPER, or SCISSORS.`
    }
};

function game() {
    /* create playerSelection variable that prompts the user to enter rock, paper, or scissors
       make sure it is not case sensitive use - variableName.toUpperCase() on the playerSelection variable */
    const message = prompt('ROCK, PAPER, OR SCISSORS?').toUpperCase();
    const output = (`Player: ${message}
    Bot Choice: ${computerPlay()}
    ${roundWinner(message)}`);
    console.log(output); 
};
// to make the game loop just put the game function in a for loop
game(); 