// This is a spin off of my first kata.

// You are given a string containing a list of character lists separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
// Examples

// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

//P: (PARAMETERS) Given a string. The string will have a list (which is basically just xyz separated by commas). Yes, always will be given a string.
//R: (RETURN) We are returning the guts. So we are getting rid of the first and the last in the list and returning the middle, aka the guts. If getting rid of the first and the last in the list would give us nothing, we need to return NULL. The values we return ought to be separated NOT by commas, but now by spaces. WE ARE STILL RETURNING A STRING BTWS
//E:

console.log(removeFirstAndLast("1,2,3"), "2");
console.log(removeFirstAndLast("1,2,3,4"), "2 3");
console.log(removeFirstAndLast(""), null);
console.log(removeFirstAndLast("1,2"), null);

//Make a function that takes in a string
function removeFirstAndLast(str) {}
// Within the function, break up the string
// after the string is broken up, grab the first and last values
//and chuck em into space
// join together the rest of the values with a space in between
//and return it
