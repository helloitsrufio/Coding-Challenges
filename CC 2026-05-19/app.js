// Complete the solution so that it splits the string into strings of two characters in a list/array (depending on the language you use). If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//PARAMETERS:
// We are going to split a given string into multiples of 2. and then will return in an arr of strings. if there is an odd num of characters, then we supplement the last character with a buddy of _. If we are given an empty str, then we will just return an empty array
//R: Should return an arr of strings, with each item being 2 characters long, in string format.
//EXAMPLES:
console.log(solution("abc"), ["ab", "c_"]);
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution(""), []);

//Pseudocode
//split str into an arr of characters
// check the length of the arr
// if the arr is odd, add onto the end of the arr a _
// join based on 2
// return? if the prev step supplies an arr to work with
// since we are already iterating by 2, we can use slice, and we can use 2 indices within it?
function solution(str) {
  let arrOfStr = [];
  if (str.length % 2 !== 0) {
    str = str + "_";
  }
  for (let i = 0; i < str.length; i += 2) {
    arrOfStr.push(str.substring(i, i + 2));
  }
  return arrOfStr;
}

// QUESTIONS:
// WHY is it < and not <= in the loop? ✅✔
// WHY do I need to increment by 2 in the loop? ✔
// WHY does it need to be substring, and not slice?
