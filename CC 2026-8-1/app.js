// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//Given a list of integer pairs, in arr form. First item in [0,0] => people who get on the bus
//Second item in [0,0] => people who get off the bus
//No negative numbers ever. SO 0+
//So to start with, we don't know the first integer, but the second is 0.
//RETURN: We are returning a singular num where ppl are still on the bus, and even when the bus stops are over, this is probably nonzero but could also be zero.
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ]),
  17,
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ]),
  21,
);
console.log(number([[0, 0]]), 0);
//Pseudocode:
//taking in the parent arr
//make a for of loop, where we are saying that for each babyArr of the parentArr
//subtract second arr number from first arr number
//make another for loop where:
// add all nums in the new parent arr of nums together
//return the summed nums
function number(parentArr) {
  const differences = [];
  let sum = 0;
  for (const babyArr of parentArr) {
    differences.push(babyArr[0] - babyArr[1]);
  }
  for (const dif of differences) {
    sum += dif;
  }
  return sum;
}
