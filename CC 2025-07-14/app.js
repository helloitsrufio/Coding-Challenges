// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).
// Examples:

// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//Will be given a list of integers, can include 0. Will always be integers. Will look like an obj. We are adding up the numerical contents of our list. Can also have nonzero numbers. I think nums should prob be whole tho
// Should return a string that says 'odd' or 'even'
//
console.log(oddOrEven([0]), "even");
console.log(oddOrEven([0, 1, 4]), "odd");
console.log(oddOrEven([0, -1, -5]), "even");

function oddOrEven(array) {
  let compositeArr = array.reduce((acc, currVal) => acc + currVal, 0);
  if (compositeArr % 2 === 0) {
    return "even";
  }
  return "odd";
}
//cycle through our object
//add all the nums together
// evaluate whether it's odd or even
// if odd, return 'odd'
//if even return 'even'
