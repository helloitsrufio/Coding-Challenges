// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
//PARAMETERS: We are given a string. Every word will have a number in it. We are sorting the string words in numerical order. Each word will always have a number in it. Length doesn't matter (I think).
//RESULT: Ought to return a string. String should be sorted in numerical order.
//EXAMMPLES:

// console.log(
//   order("4of Fo1r pe6ople g3ood th5e the2"),
//   "Fo1r the2 g3ood 4of th5e pe6ople"
// );
// console.log(order("ruf9io"), "ruf9io");
//P:make a function that takes in a str
//break up the string into words
//search through each str for a number, and apply sorting to it? sort must be in ascending order
//return?
function order(str) {
  let words = str.split(" ");
  console.log(words);
  let nums = [];
  let keyValuePairWords = {};
  for (let i = 0; i < words.length; i++) {
    keyValuePairWords[words[i].indexOf()];

    nums.push(
      words[i].split("").find((element) => "0123456789".includes(element))
    );
  }
  nums.sort();
  for (let i = 0; i < words.length; i++) {
    words[i].sort(nums);
  }
  console.log(keyValuePairWords);
  console.log(nums);
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
