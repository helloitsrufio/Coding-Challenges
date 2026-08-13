// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

//     Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
//     Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
//     Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
//     Other characters: 0 value

// Note: input will always be a string

//PARAMETERS: Given a sentence full of any type of character, and input will always be of type string.
//RETURN: Return a sum (number), the sum being the sum of all the characters in the sentence
//EXAMPLES:

tester("ARE YOU HUNGRY?", 356);
tester("oops, i did it again!", 152);
tester("Give me 5!", 73);

console.log(lettersToNumbers("ARE YOU HUNGRY?"), 356);
console.log(lettersToNumbers("oops, i did it again!"), 152);
console.log(lettersToNumbers(" "), 0);
//PSEUDOCODE:
//make a function
function lettersToNumbers(str) {
  //make an empty obj
  //make a sum var
  //make a string that contains all the letters of the alphabet that are lowercase
  //make string that contains all the letters of the alphabet that are uppercase
  let mappedCharacters = {};
  let sum = 0;
  let lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < lowercaseAlphabet.length; i++) {
    const letter = lowercaseAlphabet[i];
    mappedCharacters[letter] = i + 1;
  }
  for (let i = 0; i < uppercaseAlphabet.length; i++) {
    const letter = uppercaseAlphabet[i];
    mappedCharacters[letter] = (i + 1) * 2;
  }
  for (let i = 0; i < str.length; i++) {
    if (!Number.isNaN(Number(str[i]))) {
      sum += Number(str[i]);
    } else {
      const value = mappedCharacters[str[i]];
      if (value !== undefined) {
        sum += value;
      }
    }
  }
  return sum;
}
 Object.fromEntries([['a', 1], ['b', 2], ['c', 3]]); Output: { a: 1, b: 2, c: 3 }
//loop over the lowercase string:
//for every char in the string, add it to the object with the value of alphabet[i]
// make a new var that has the value alphabet[i]
// grab the obj with the var we just made and set the value = index plus one
//do the same thing for the uppercase loop, but increment by +1*2
//look at the string we were given
//if it is a number, add the value of the number to the sum variable
//if it not a number:
//is there a key for that letter in the map?
//if the key matches our current value, then add it to the sum
//if not,give it a value of zero
//return sum
