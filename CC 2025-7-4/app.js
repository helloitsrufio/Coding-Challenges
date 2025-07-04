// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//P: We will be given a string. We will ignore nums and punctuation.
//R: Boolean value, T or F
//E:
console.log(isPangram("The quick brown fox jumps over the lazy dog"), true);
console.log(isPangram(""), false);
console.log(isPangram("abcdefghijklmnopqrstuvwxy ."), false);

//P:
function isPangram(str) {
  let map = new Map();
  str = str.toUpperCase().replace(/[^a-zA-Z]/g, "");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      map.set(str[i], 1);
    }
  }
  return map.size == 26;
}
//make a map object *grimace*
//make our str lowercase
//make a for loop in which we will iterate thru our whole shebang (str). length must be 26?
//are you a letter? find a way to figure that out  `ch.toLowerCase() !== ch.toUpperCase()`
//if no, throw it away?
//if it is a num or
//if it is a new character, insert it as a new key value pair in the thingy
//if it isn't add it to the existing one
//
