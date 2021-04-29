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

//teacher soln:

function containsDupes(arr){
  //if it's less than arr.length, there were indeed duplicates
  return new Set(arr).size < arr.length
}
//doesn't terminate as soon as it finds a duplicate, so suboptimal.

//teacher solution, but optimal this time.
function containsDupes(arr){
    let numsMap = {}
    for(let i = 0; i < arr.length; i++){
      //individual num
      let num = arr[i]
      //true if there's something in map that has val. This says, if this is ever true, I've found a duplicate, and stop here.
      if(numsMap[num]){
        return true
      }else{
        //go to numsMap object with the current val, and put it in. Let that property of whatever number it is be true
        numsMap[num] = true
      }
    }
    //if we never get to the true statement, it completes the loop and returns false. 
    return false
  }
  
  console.log(containsDupes([1,2,3,1]),'true')
  console.log(containsDupes([1,2,3,4]),'false')
  console.log(containsDupes([1,1,1,3,3,4,3,2,4,2]),'true')
  //more optimal because it stops once there's a duplicate.