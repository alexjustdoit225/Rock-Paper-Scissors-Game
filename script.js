const resultsContent = document.createElement('div'); 
const resultsContainer = document.querySelector('#container-results');

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
        return resultsContent.textContent = 'You Win! Paper covers rock.';
    }
    else if ((computerChoice === 'ROCK') && (userChoice === 'SCISSORS')){
        return resultsContent.textContent = 'You Lose! Rock smashes scissors.';
    }
    else if ((computerChoice === 'PAPER') && (userChoice === 'SCISSORS')){
        return resultsContent.textContent = 'You Win! Scissors slices paper.';
    }
    else if ((computerChoice === 'PAPER') && (userChoice === 'ROCK')){
        return resultsContent.textContent = 'You Lose! Paper cover rock.'; 
    }
    else if ((computerChoice === 'SCISSORS') && (userChoice === 'ROCK')){
        return resultsContent.textContent = 'You Win! Rock smashes scissors.';
    }
    else if ((computerChoice === 'SCISSORS') && (userChoice === 'PAPER')){
        return resultsContent.textContent = 'You Lose! Scissors slices paper.';
    } 
    else if ((computerChoice === userChoice)) {
        return resultsContent.textContent = `It's a tie.`
    }
    else {
        return resultsContent.textContent = `You did not pick ROCK, PAPER, or SCISSORS.`
    }
};

// plays one round of rock paper scissors
function oneRound() {
    let computerChoice = generateComputerChoice();
    let userChoice = getUserChoice(); 
    let winner = roundWinner(userChoice, computerChoice); 
    let finalMessage = `Player: ${userChoice}
Bot Choice: ${computerChoice}
${winner}`;  
    console.log(finalMessage);
    return finalMessage; 
}

// // plays five rounds
// for (i = 0; i < 5; i++) {
//     oneRound();
// }

function getUserChoice() {
    const btns = document.querySelectorAll('.rps'); 
    // add an event listener to all buttons where when clicked it will play one round
    btns.forEach( button => {
        button.addEventListener('click', () => {
        const userChocie = button.dataset.selection;
        // return rock paper or scissors  
        console.log(userChocie); 
        return userChocie;  
        });
    });
} 

resultsContent.setAttribute('id', 'resultsContent'); 
resultsContent.style.backgroundColor = 'white'; 




//  // ERROR HANDLING
//  if ((userChoice !== 'rock'.toUpperCase()) || (message !== 'paper'.toUpperCase()) || (message !== 'scissors'.toUpperCase())) {
//     console.log('You did not type ROCK, PAPER, or SCISSORS. Try Again'); 
//     message(); 
// };