// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.
// PARAMETERS: take in an arr of integers
// RETURN: returns an arr of even integers
// EXAMPLE:

assert.deepEqual(noOdds([0, 1]), [0]);
assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2]);

console.log(noOdds([0, 1]), 0);
console.log(noOdds([]));
console.log(noOdds([1, 2, 3, 4, 5, 45]), [2, 4]);

//PSEUDOCODE:
// make a variable that is equal to
// the values, which we will apply a filter on
// the filter will filter for all the positive nums with a mod char
// return the variable

function noOdds(values) {
  const evenArr = values.filter((num) => num % 2 === 0);
  return evenArr;
}
