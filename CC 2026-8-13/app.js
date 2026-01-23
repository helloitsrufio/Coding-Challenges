// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//PARAMETERS: we are taking in an ARR of STRINGS, none of the strings will be the same length. Doesn't matter if they are numbers. If we are given an empty arr, should just return an empty arr.
//RETURN: a sorted arr starting with the shortest strs to the longest.
//EXAMPLES:

console.log(sortByLength(["Beg", "Life", "I", "To"]), [
  "I",
  "To",
  "Beg",
  "Life",
]);
console.log(sortByLength([]), []);
console.log(sortByLength(["sdfwefewfFFFFFsdwew", "RUFIooooooo", " "]), [
  " ",
  "RUFIooooooo",
  "sdfwefewfFFFFFsdwew",
]);

//PSEUDOCODE:
//we are going to take our given arr
function sortByLength(arr) {
  let sortedArr = arr.sort((a, b) => a.length - b.length);
  return sortedArr;
}
// and we are going to apply sort to it
//where the condition is a.length - b.length
//also return that?

// deep= makes new copies,
// shallow = only makes a copies of primitives while arraays, objs and functions are not copied but referenced (which means CAN be edited)

function getMartabakManis(money) {
  let ask = "boleh satu martabak manis sama coklat dan keju";
  if (goToMartabakVendor) {
    if (ask && money) {
      return oneMartabakManis;
    }
  }
}
