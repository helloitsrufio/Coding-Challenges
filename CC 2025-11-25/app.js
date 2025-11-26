// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// Not always given two params. Will only contain letters from a-z. Will not contain spaces, numbers, or special chars of any kind. will at least contain one char in the string. no limitation to how many.
// Return a str that contains one max of a letter, if that letter was in strings 1 or 2.
//E:
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"), "abcdefklmopqwxy");
console.log(
  longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"),
  "abcdefghijklmnopqrstuvwxyz"
);
console.log(longest("axa", "c"), "axc");

//Make a function that takes in max two params

function longest(str1, str2) {
  const finalStr = "";
  //make an empty var
  for (let i = 0; i < str1.length; i++) {
    if (!finalStr.includes[str1[i]]) {
      finalStr += str1[i];
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!finalStr.includes[str2[i]]) {
      finalStr += str2[i];
    }
  }
  return finalStr;
  // loop through each str, but letter by letter, and evaluate the empty var
  //does the empty var have that letter?
  //if no, add it!
  //if yes, skip it!
  //do it again for second param!
  //return not-empty-anymore-var
}
