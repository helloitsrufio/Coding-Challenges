// /*
// Simple code review challenge. Guess the output, then run it and see what it actually is.
// */
const AGE = 25;
const MAX_AGE = 20;

// // if the condition fails, run this function
const failFunction = (() => console.log('Old'))

// // if the condition succeeds, run this function
const successFunction = (() => console.log('Young'))

// // Do a check to see if the age is less than or equal to the max age and run the appropriate function
(AGE <= MAX_AGE) === true ? successFunction() : failFunction()
(25 <= 20)

//P: Need to see if the given age is <= max age. Return appropriate function. 
//These are the two ages we are given:
const AGE = 25;
const MAX_AGE = 20;
//We want to console log statements based on their truth value/if they work. 
//If it does not work, run
const failFunction = (() => console.log('Old'))
//If it does work, run
const successFunction = (() => console.log('Young'))
//the goal is to tell what is logged to the console. 
//read the code and guess what it will output to console

