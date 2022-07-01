// https://www.codewars.com/kata/5264d2b162488dc400000001

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

//Will take in a string of 1+ words (no empty strings then). Will return string but with words that are 5+ letter reversed. Strings will only have letters and spaces, no special chars. Spaces only included when there is more than one word.
//Return a the inputted string, but with numbers with char amount over 5 reversed.
//Make a function that takes in a string
function spinWords(str) {
  return (
    str
      //split string into individual words
      .split(" ")
      //map through and check if each element in the array's length is 5+ chars
      .map((e) => {
        if (e.length >= 5) {
          //if it is, then split into individual chars? And reverse and join
          return e.split("").reverse().join("");
        } else {
          return e;
        }
      })
      //join overall str and return
      .join(" ")
  );
}

console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
