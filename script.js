

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

// write a function that plays one round of rock, paper, scissors
function oneRound() {
    // create playerSelection variable that prompts the user to enter rock, paper, or scissors
        // make sure it is not case sensitive use - variableName.toUpperCase() on the playerSelection variable
    // store the string that states who won the round 
    // return the string that declares the winner of the round 
}

/* idea; make a function called prompt that prompts the user and takes 
   in the parameter of a message, so that you can use the prompt() function throughout your code */