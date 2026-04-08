// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// Try to do it without using if statements!

// PARAM: We are given two numbers and a written out arithmetic operator (like 'add'). So then we are going to do what the written out operator asks us to do via its name. So we are given 3 things, num1, num2, and the operator string.
//four operators, they will always be 'add', 'divide', etc. They will never be anything besides those.
//A and b will always be positive integers. They don't have to be whole numbers. A will always be the first num (or num1), and b will always be the second num (num2).
//the operator will always be a str
//Result: a num
//examples:


//PSEUDOCODE:
// const colorsTable = {
//   yellow: add()
//   blue: "azul",
//   red: "rojo",
// };

// const colorMapper = (color) => colorsTable[color] || "No aplica";

// colorMapper("yellow"); //=> amarillo
// colorMapper("pink"); //=> No aplica
//we have a function that will take in num1, num2, and a str
/** we then will make a lookup table!
 * the lookup table will have a key and a value, where the key is equivalent to the name of the str, and the value is () <- (just that)
 * let object = {
 * add: (a,b)
 * delete: ()}
 * we will make an anon function, described in the line above, which apparently will take in a, b, and operator
 * then we will have the result of that be the corresponding operator a OPERATOR B
 * //and return that
 *
 */
function arithmetic(num1, num2, operator) {
  const lookupTable = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };
//   return lookupTable[operator](num1, num2);
  return eval(`${num1} ${operator} ${num2}`
}

