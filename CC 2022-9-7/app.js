// Given an integer array 'nums', return 'true' if any value appears at least twice in the array, and return 'false' if every element is distinct.

//We are given an array with the name of NUMS (lowercase tho). The problem wants us to return a boolean. Either true if any value in the array appears 2x or more, and return false if that is not the case.
//The length of the NUMS array has to be at least 1, but can be any number up to 10^5
// Result -> TRUE if any element occurs 2x or more. False otherwise.
//@ts-check

console.log(containsDuplicate([1, 2, 3, 1]), true);
console.log(containsDuplicate([1, 2, 3, 4]), false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

//P:
function containsDuplicate(nums) {
  //Gonna need to go through the array and see if any of the values occur 2x or more.
  const newArr = [];
  //make other array (empty)
  //Heyyyy so we have a first loop of sorts
  for (const e of nums) {
    if (!newArr.includes(e)) {
      newArr.push(e);
    } else {
      return true;
    }
  }
  //As we cycle through the array, we are checking each element and saying, 'sup yo, are you in this other array?'
  //If no, then push the element into the other array.
  //If yes, then return TRUE
  return false;
}

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
