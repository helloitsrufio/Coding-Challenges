// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples (input --> output):

// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "#################################man

//P: We want to change all but the last four characters into #s. It doesn't matter if we are given a number or a character. We also octothorpe spaces if there are enough of them. We take in a string. But anything can be in the string.
//Returning a string. But the string must be octothorped except for the last 4 characters.
//E
console.log(maskify("4556364607935616"), "############5616");
console.log(maskify(""), "");
console.log(
  maskify("Nananananananananananananananana Batman!"),
  "####################################man!"
);
//P:
function maskify(str) {
  let lastFour;
  let octothorpedChars;
  if (str.length <= 4) {
    return str;
  } else {
    lastFour = str.slice(-4);
    octothorpedChars = str.slice(0, -4);
    octothorpedChars.replace(($&), "#")
  }
}
//we want to see if it is 4 or more characters
//if not, return string as is
//if it is longer than 4 characters, then split off the last 4 characters
//take all the other characters, and replace each of them with an octothorpe
//put the two halves together again, and return it!
