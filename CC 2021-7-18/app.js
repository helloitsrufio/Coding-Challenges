// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here:
// https://www.wikiwand.com/en/Factorial

//P: Does it take in strings at all? Does it take in an array? Will it ever come back as incomplete?
//R: Input of a factorial.
//E: Ex. If I am given 5! then it is 5 * 4 * 3 * 2 * 1 = 120
//   Ex. If I am given 4! then it will be 4 * 3 * 2 * 1 = 24
//   Ex. If I am given 6! then it will be 6 * 5 * 4 * 3 * 2 * 1 = 720
//P: make a function that takes in one parameter
function factorial(n){
//   Make a loop that will cycle through all nums leading up to the main num
for(i=0; i>= n.length; i++){
   return n.map(x => x[i] * x)
}
//   Return the answer
}
//Tried .map(), .forEach()
//Tried:
//  some sort of for loop
//  n.map(x => x[i] * x)
//  n.forEach(x => x[i] * n[i])
//  n.forEach(x => x[i] * x[i])

//It was having an issue with me declaring i as a variable, although I'm REALLY not sure why. I didn't do anything wrong there? And when it wasn't having a problem with i (before I put in 'let'),it was having an issue with the ";" after declaring 'i'.

//After seeing the answers:
//I don't know how to write RangeErrors, apparently. I tried to toss in 'return RangeError' but I needed to put 'throw new RangeError()' instead. 
//This is someone else's soln:
function factorial(n) {
    if (n < 0 || n > 12)
    //Can factorials not be more than 12? I didn't know that. 
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
    // So this means if n is 1, return 1, else for the case that n is less than or equal to 1, return n times the function n - 1. This last part confuses me. I didn't expect them to put the function within the function. But by putting 'factorial(n-1)' they allowed n to multiply by its greatest number. That makes sense, but what about all the numbers between them? I thought there would have to be a loop or a map for sure!
  }
  //Here is one I think I understand better?
  function factorial(n){
    let fact = 1;
    if (n == 0) {
    return 1;
    } else if ( n > 12 || n < 0) {
    throw "RangeError";
    } else {
    for (let i = 1; i <= n; i++){
        //they start 'i' at 1 because they already covered 0. They didn't do n.length. I swear these types of problems always do, but it did not.
    fact *=i;
        //so here they multiply 1 by each iteration of i up to n. THAT MAKES SENSE. And then they return it! I wouldn't have come up with declaring 'fact' beforehand and then putting it into my for() loop. I also wouldn't have put a for loop into an if/else loop. The more you know. 
    }
    }
    return fact;
}