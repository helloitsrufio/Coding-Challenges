// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// Examples:

// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
// Note

// consecutive strings : follow one after another without an interruption

//P:given an arr of strings, and an integer k. want to return the longest string of k amount of strings (if k = 2, then it would just be 2 strings). If the arr of strings is empty, or k is bigger than the # of strings, return an empty string.STRINGS MUST BE CONSECUTIVE!
//R: Return a mishmash of strings, k amount of them, and the longest combo of them.
//E:

console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2),
  "folingtrashy",
);
console.log(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2,
  ),
  "abigailtheta",
);
console.log(longestConsec(["tree", "foling"], 5), "");

//P:
//make an empty object
//make a loop where we iterate it every 2?
//combine n[0] & n[1] and push to object?
//

console.log(
  longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2),
  "folingtrashy",
);
// console.log(
//   longestConsec(
//     ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
//     2,
//   ),
//   "abigailtheta",
// );
// console.log(longestConsec(["tree", "foling"], 5), "");

//P:
//make an empty object
//make a loop where we iterate it every 2?
//combine n[0] & n[1] and push to object?
//

function longestConsec(inputArr, k) {
  let longestWord = "";
  for (i = 0; i <= inputArr.length - k; i++) {
    combinedWord = "";
    for (j = i; j < i + k; j++) {
      combinedWord = combinedWord + inputArr[j];
    }
    if (longestWord.length < combinedWord.length) {
      longestWord = combinedWord;
    }
  }
  return longestWord;
}
