// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//PARAMETERS: Going to make a function, first of all. It will return the count of distinct case-insensitive alphabetic characters/digits that occur more than once. It will be in the latin alphabet, and what will we do about special characters? NO SPECIAL CHARACTERS. Taking in a string. It will only be made of alphabets, can be upper or lowercase, and numeric digits. Probably whole numbers. DOTS ARE A SPECIAL CHARACTER
//RETURN: Return a number. Will return the number of however many characters are repeated.
//EXAMPLES:

console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("indivisibility"), 1);
console.log(duplicateCount("ABBA"), 2);

//PSEUDOCODE:
//Make a function that takes in a string
function duplicateCount(str) {
  const countOfCharacters = {};
  str = str.toLowerCase();
  // let finalCountdown;
  for (let i = 0; i < str.length; i++) {
    if (countOfCharacters[str[i]]) {
      countOfCharacters[str[i]] += 1;
      // finalCountdown += 1;
    } else {
      countOfCharacters[str[i]] = 1;
    }
  }
  console.log(Object.entries(countOfCharacters));
  return Object.entries(countOfCharacters).filter(
    (keyValuePair) => keyValuePair[1] > 1
  ).length;
}

//make an object
//probably loop thru
//we are going to look at each individual character
//we are going to change it all to lowercase (if applicable)
//if it's a new letter, we are going to add it to the object
//it it's a num we already have, then add to the count of the letter that's already in there.
//once we have gone through the whole string input, note if there are any numbers above 1
//count the amount of key value pairs? above one
//and return that num
