// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

//PARAMETERS: We need to make an ASCII tower out of an arr of strings. If we are given an empty string, then there is no tower! Only characters in the string should be *s. Given a positive integer num of floors, never negative. IS JUST ONE. like '8'
//Return: arr of strings, strings are ascii towers
//adds two *s every iteration
//EXAMPLES:
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);
console.log(towerBuilder(6), [
  "     *     ", // 1
  "    ***    ", // increase 2 stars every time - 1
  "   *****   ", // (TOTAL AMT OF FLOORS * 2 - 1)
  "  *******  ", // +1
  " ********* ", //(TOTAL AMT OF FLOORS * 2 - 1)  + 1
  "***********",
]);
console.log(towerBuilder(0), []);

//PSEUDOCODE:
// make an empty arr
// calculate length of overall strings by using a formula or whatever.
// use that same formula, but not in a loop, and save it to a variable
//then inside the loop, we look through nfloors number of times,
//and then

// the formula comes from us starting with 1 floor, and then adding two ascii asterisks every time. so to figure out all floors except the first floor, we need to do that, but also subtract the first floor from it.

//formula for the amt of stars:
// (nfloors -1) * 2 + 1
// AMOUNT_OF_FLOORS_WITH_ONE_STAR * 1 + AMOUNT_OF_FLOORS_THAT_ADD_TWO_STARS * 2
// 1 * 1 + (allTheRestOfTheFloors - 1 * 2);
// 1 + (allTheRestOfTheFloors - 1 * 2);
// make a loop that goes nFloors num of times
// push strings to a result arr
function towerBuilder(nFloors) {
  let pyramidArr = [];
  let strLength = nFloors * 2 - 1;
  for (let currentFloor = 0; currentFloor < nFloors; currentFloor++) {
    let numOfChars = currentFloor * 2 + 1;
    let numOfSpaces = (strLength - numOfChars) / 2;
    pyramidArr.push(
      " ".repeat(numOfSpaces) +
        "*".repeat(numOfChars) +
        " ".repeat(numOfSpaces),
    );
  }
  return pyramidArr;
}
