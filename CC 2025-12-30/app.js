// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//P: Input arr will always be valid. Min arr length is 3. Arr will always be filled with numbers. What we are given in the first place is an arr!
//R: Returns singular divergent num. BUT it will be a number.
//E:
console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 17, 17, 17, 17, 42]), 42);
console.log(stray([1, 6, 6, 6, 6, 6]), 6);

function stray(numbers) {
  //make an empty obj
  let hashmap = {};
  //cycle thru arr
  numbers.forEach((value, i) => {
    //have we seen this before?
    //if not, add it as a new key value pair
    //if yes, increase value by 1.
    if (hashmap[value]) {
      hashmap[value]++;
    } else {
      hashmap[value] = 1;
    }
  });
  for (const [key, value] of Object.entries(hashmap)) {
    if (value == 1) {
      return Number(key);
    }
  }
  //look at the whole obj, and find the key value pair with the value of one
  //return the key in the k-v pair with the value of 1
  return 0;
}
