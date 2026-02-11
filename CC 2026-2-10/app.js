// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//PARAM: Take in a str. If empty, then it is an empty object literal. What about if it is a number? No problem; it just mentions "ALL OCCURING CHARACTERS", so it doesn't matter about what the char is
//RESULT: Should return an object that has key value pairs
//

//PSEUDOCODE:
//make a function
//take in a str?
//make an empty obj
//split string up thru a loop
//then do a conditional that says, 'have i seen this before?'
// if i have NOT seen it before, then make a key value pair and set it equal to 1 in the empty obj
//if I have seen it before, incremembent value +1 in the obj
//return obj
function test(str) {
  const returnObj = {};
  for (i = 0; i < str.length; i++) {
    if (returnObj[str[i]]) {
      returnObj[str[i]]++;
    } else {
      returnObj[str[i]] = 1;
    }
  }
  return returnObj;
}

console.log(test("ab", { a: 1, b: 1 }));
console.log(test("aba", { a: 2, b: 1 }));
console.log(test("", {}));
