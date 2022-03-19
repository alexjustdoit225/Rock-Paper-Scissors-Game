

//console.log('Hello World')
function computerPlay() {
    // create an array storing rock, paper, scissors
    const choices = ['ROCK', 'PAPER', 'SCISSORS']; 
    // create a variable that stores a random number between 0 and 2
    let randNum = Math.floor(Math.random()*3); 
    // create a variable choice, that uses the random number variable to pick rock, paper, or scissors in the array
    let choice = choices[randNum]; 
    
    console.log(choice); 
    return choice; //choice should return rock, paper, or scissors 
}; 
computerPlay(); 

// write a function that plays one round of rock, paper, scissors and returns the round winner text
function oneRound() {
    /* create playerSelection variable that prompts the user to enter rock, paper, or scissors
       make sure it is not case sensitive use - variableName.toUpperCase() on the playerSelection variable */
    let playerSelection = prompt('ROCK, PAPER, OR SCISSORS?').toUpperCase(); 
    // store the string that states who won the round 
    let roundWinnerText; 
    // create if statements to determine what the roundWinnerText variable will say 
    if (computerPlay === 'ROCK' &&  playerSelection === 'PAPER'){
        roundWinnerText = 'You Win! Paper covers rock.';
    }
    else if (computerPlay === 'ROCK' && playerSelection === 'SCISSORS'){
        roundWinnerText = 'You Lose! Rock smashes scissors.';
    }
    else if (computerPlay === 'PAPER' && playerSelection === 'SCISSORS'){
        roundWinnerText = 'You Win! Scissors slices paper.';
    }
    else if (computerPlay === 'PAPER' && playerSelection === 'ROCK'){
        roundWinnerText = 'You Lose! Paper cover rock.'; 
    }
    else if (computerPlay === 'SCISSORS' && playerSelection === 'ROCK'){
        roundWinnerText = 'You Win! Rock smashes scissors.';
    }
    else if (computerPlay === 'SCISSORS' && playerSelection === 'PAPER'){
        roundWinnerText = 'You Lose! Scissors slices paper.';
    }
    // return the string that declares the winner of the round 
    return roundWinnerText; 
};
oneRound(); 

/* idea; make a function called prompt that prompts the user and takes 
   in the parameter of a message, so that you can use the prompt() function throughout your code */