// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA you need to return the other complementary side. DNA strand is never empty or there is no DNA at all.

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

//PARAMETERS:
//We are going to be getting back a string. That's the thing that's coming in and also going out. The thing we are getting out will be the complement of the string put in, where the letters are the given complements. Are we ever given an empty string? Going to say, NAWR. The input string will be made of exclusively the following letters: A, T, C, G. The complement of A is T, the complement of C is G.
//RETURN TO US COLLECTIVELY: We want to return the complement of the input string, with the proper compliment letters.
//E:

console.log(dnaStrand("ATTGC"), "TAACG");
console.log(dnaStrand("GTAT"), "CATA");
console.log(dnaStrand("ATCGT"), "TAGCA");

function dnaStrand(str) {
  //Inside the function, we will make a loop that will split our string up
  const newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      newStr[i] = "T";
    } else if (str[i] === "T") {
      newStr[i] = "A";
    } else if (str[i] === "G") {
      newStr[i] = "C";
    } else if (str[i] === "C") {
      newStr[i] = "G";
    }
  }
  return newStr.join("");
  // And we will look at each individual letter
  // And then we will say, if A, then replace with T
  //If T, replace with A
  //If G, recplace with C
  //If C, replace with G
  //put humpty dumpty back together again
  //and return him to his rightful glory :)
}
