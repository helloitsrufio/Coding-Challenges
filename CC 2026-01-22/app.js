// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//Params: Are we always given an arr of numbers, or does it ever not have numbers in it? Always has nums in it. What do we do for an empty arr? return an empty arr
// Are we always given an arr of numbers? Yes
// Are numbers the only things that are ever in it? Yes
// If I am given an empty arr, do I just return an empty arr? Yes
// Our paramters are an arr, and a number N. Is that right? Y
// Return: It should return an arr of numbers that has each number max N amount of times. Is that right? Y
//Examples
console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2), [1, 2, 3, 1, 2, 1, 2, 3]);
console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([], 22), []);

//Pseudocode
//made a function that took in two params
//each time you encounter a numb, you're concerned about how many times you encounter the number
// make an obj
// make a new arr (to be returned)
// use a for loop to loop thru our arr
// look at each num in the arr
// compare it somehow with new obj; is it in new obj?
// if not, put it in there with a count of 1
// if it is, increase count by 1
// add to the new arr insofar as value <= n
// return new arr
// ([20, 37, 20, 21], 1)
// {   20: 2,
//     37: 1,
//     21: 1,
// }
// [20, 37, 21]

function deleteNth(arr, n) {
  let counts = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]]++;
    } else {
      counts[arr[i]] = 1;
    }
    if (counts[arr[i]] <= n) {
      result.push(arr[i]);
    }
  }
  return result;
}
