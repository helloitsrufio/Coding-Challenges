// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false

//PARAMETERS: We are always going to be given 3 values. They will always be above the number 0, so 1 and above. If 0 or below, automatic NO. Values will always be numbers. They will always be WHOLE numbers, just because.
//RETURN: Should return a boolean value, true or false. True if sides of triangle are of compatible lengths, false if anything else.
//EXAMPLES:
console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(-5, 1, 3), false);
console.log(isTriangle(4, 2, 3), true);
console.log(isTriangle(1, 2, 9), false);
// (a + b) > c;
//PSEUDOCODE:
//Make a function that takes in 3 inputs
//we are going to look at all of the values, and if any of them are 0 or less, then return false immediately.
//determine which is the biggest number
//if a or b is already bigger than c, then return false, given (a+b) > c
//if b or c is already bigger than a, then return false, given (c+b) > a
//if a or c is already bigger than b, then return false, given (a+c) > b
//We are going to add a and b together in a new var
// we are compare the new ab var with c, and if it is greater than c, return true
//else return false

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  let biggestNum = 0;
  let smallestNum = 0;
  let smallestOtherNum = 0;
  let comboVar = 0;
  if (a >= b && a >= c) {
    biggestNum = a;
    smallestNum = b;
    smallestOtherNum = c;
  } else if (b >= a && b >= c) {
    biggestNum = b;
    smallestNum = a;
    smallestOtherNum = c;
  } else if (c >= a && c >= b) {
    biggestNum = c;
    smallestNum = a;
    smallestOtherNum = b;
  }
  if (smallestNum + smallestOtherNum < biggestNum) {
    return false;
  }
  comboVar = smallestNum + smallestOtherNum;
  if (comboVar > biggestNum) {
    return true;
  }
  return false;
}
