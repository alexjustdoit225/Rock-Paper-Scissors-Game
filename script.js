//console.log('Hello World')
function computerPlay() {
    // create an array storing rock, paper, scissors
    const choices = ['rock', 'paper', 'scissors']; 
    // create a variable that stores a random number between 0 and 2
    let randNum = Math.floor(Math.random()*3); 
    // create a variable choice, that uses the random number variable to pick rock, paper, or scissors in the array
    let choice = choices[randNum]; 
    
    console.log(choice); 
    return choice; //choice should return rock, paper, or scissors 
}; 
computerPlay(); 