function generateComputerChoice() {
    // create an array storing rock, paper, scissors
    const choices = ['ROCK', 'PAPER', 'SCISSORS']; 

    // create a variable that stores a random number between 0 and 2
    const randNum = Math.floor(Math.random()*3);  
    return choices[randNum];  
};

// create a function that prompts the user and returns the message 
function message() {
    /* create playerSelection variable that prompts the user to enter rock, paper, or scissors */
    let message = prompt('ROCK, PAPER, OR SCISSORS?');
    return message; 
}

// write a function that plays one round of rock, paper, scissors and returns the round winner text
function roundWinner(userChoice, computerChoice) { 
    // create if statements to determine what the roundWinnerText variable will say 
    if ((computerChoice === 'ROCK') && (userChoice === 'PAPER')){
        return 'You Win! Paper covers rock.';
    }
    else if ((computerChoice === 'ROCK') && (userChoice === 'SCISSORS')){
        return 'You Lose! Rock smashes scissors.';
    }
    else if ((computerChoice === 'PAPER') && (userChoice === 'SCISSORS')){
        return 'You Win! Scissors slices paper.';
    }
    else if ((computerChoice === 'PAPER') && (userChoice === 'ROCK')){
        return 'You Lose! Paper cover rock.'; 
    }
    else if ((computerChoice === 'SCISSORS') && (userChoice === 'ROCK')){
        return 'You Win! Rock smashes scissors.';
    }
    else if ((computerChoice === 'SCISSORS') && (userChoice === 'PAPER')){
        return 'You Lose! Scissors slices paper.';
    } 
    else if ((computerChoice === userChoice)) {
        return `It's a tie.`
    }
    else {
        return `You did not pick ROCK, PAPER, or SCISSORS.`
    }
};

// plays one round of rock paper scissors
function oneRound() {
    let computerChoice = generateComputerChoice();
    let userChoice = message(); 
    let winner = roundWinner(userChoice, computerChoice); 
    let finalMessage = `Player: ${userChoice}
Bot Choice: ${computerChoice}
${winner}`;  
    console.log(finalMessage); 
}
 
for (i = 0; i < 5; i++) {
    oneRound();
}

//  // ERROR HANDLING
//  if ((userChoice !== 'rock'.toUpperCase()) || (message !== 'paper'.toUpperCase()) || (message !== 'scissors'.toUpperCase())) {
//     console.log('You did not type ROCK, PAPER, or SCISSORS. Try Again'); 
//     message(); 
// };