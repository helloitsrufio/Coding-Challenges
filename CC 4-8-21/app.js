// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//P: Does it take in anything besides nums? Special characters? Anything besides an array?
//R: T o false
//E: See console logs
//P: Make function that takes in array
  // function appearsTwice(arr){
  //   for(i=0;i<arr.length;i++){
  //     if(arr.indexOf(i) == arr.lastIndexOf(i)){
  //       return true
  //     }else{
  //     return false
  //   }
  //   }
  // }

  //------------coding challenge attempt----------

  function appearsTwice(arr){
    let elMap = {},
    for(const el of arr){
      elMap[el] == elMap[el] + 1 || 1
    }
    if (elMap[el] > 1){
      return true
    }else{
      return false
    }}

console.log(appearsTwice([1,2,3,3,3,4]), true)
console.log(appearsTwice([3,4,21]), false)