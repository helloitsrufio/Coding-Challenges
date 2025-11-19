// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//PARAMETERS: Function that ADDS two numbers together and returns sum in binary. The conversion can be done at any point in the problem. No preference for when it is done. We are given a number, and we output a string. Never given a blank input. Answer will always be in binary, 0s and 1s. Yes, is whole numbers only.
//RETURN: Take in a set of numbers. Always will be two numbers. Always will return a string.
//EXAMPLES:
console.log(addBinary(1, 1), "10");
console.log(addBinary(5, 9), "1110");
console.log(addBinary(0, 0), "0");
//PSEUDOCODE:
//Make a function that takes in a set of numbers
//Add the set of numbers together
//Use a method to convert to binary
//return

function addBinary(a, b) {
  let addedSet = a + b;
  return addedSet.toString(2);
}
