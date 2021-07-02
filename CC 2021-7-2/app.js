// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

//PARAMETERS
//Should always return a string of numbers, never og characters. If input isn't a letter, ignore and don't return. Each letter corresponds with their number in 'alphabetical order'. Will never yield a number greater than 26. Never take in special characters.  

//RETURNS
//Supposed to yield a string of numbers based on letters in the alphabet. 

//EXAMPLES
//If given "Hello", should return "8 5 12 12 15"
//If given "My name is Ruth Reed", should return "13 25 14 1 13 5 9 19 18 21 20 8 18 5 5 4"

//PSEUDO CODE
//Going to want a loop that cycles through each iteration of a letter. Going to want each letter broken up individually. Going to want each iteration to be <= array.length, or maybe 26?

//Make a function, put in var for array
function alphabetPosition(text){
//Define newArr variable
let newArr = []
//Make a for loop where i starts at 0 and increases by 1. Should be less than array.length. Let's try that out. 
for(i=0;i<=text.length;i++){
//Within loop we want to use charCodeAt and ASCII codes. 
newArr.join(charCodeAt(text[i])-64)
//Return answer
} return newArr

}


//Tbh didn't know how to do this problem at all. Needed to have newArr = ''. Got the for loop right. Needed to make 'text' uppercase and then do charCodeAt() like I was trying to, but I only needed i in there, not text[i]. Others also use split(), filter(), and map(). I need to figure out filter() and map() more. A lot of people also used regex, so that might be worth doing the next time around. 