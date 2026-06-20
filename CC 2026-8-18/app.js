// Description:

// Given an array of integers.

// Return an array, where the first element is the count of positive numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//PARAMETERS: Will always be given an arr of integers. Not anything besides integers.
// 0 is not pos or neg. If it is empty arr or null input, return empty arr
//RETURN: An arr, where the first elem is the count of + nums, second elem is what is the negative
//EXAMPLES:
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ]),
  [10, -65],
);
console.log(countPositivesSumNegatives([]), []);
console.log(countPositivesSumNegatives([0, 1]), [1, 0]);
console.log(countPositivesSumNegatives(null), []);
//PSEUDOCODE:
//take our arr and loop thru that bad boi
//make an empty arr
//make a empty var for the positive count
//make an empty var for the neg sum
//conditional time! if the answer is 0 or null, return an empty arr
//if the answer is greater than 0, then add one to the count
//if the answer is less than 0, then add it to the negative sum
//So then I am just straight up going to return an arr with the variable names in it [positiveCount, negativeSum]

function countPositivesSumNegatives(arr) {
  let positiveCount = 0;
  let negativeSum = 0;
  if (arr.length === 0 || arr === null) {
    return [];
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
      negativeSum = negativeSum + arr[i];
    } else if (arr[i] > 0) {
      positiveCount++;
    }
  }
  return [positiveCount, negativeSum];
}

// function countPositivesSumNegatives(arr){
//     if(arr == [] || arr == null || arr.map(e=>{if(e==0){
//         return []
//     }} )){
//         return []
//     }
//     let positiveArr = arr.filter(element =>
//         element>0)
//     let count = positiveArr.length
//     let negativeArr = arr.filter(element=>element<0)
//     let sum = negativeArr.reduce((acc,c)=>acc+c,0)

//     console.log([count,sum])
//     return [count,sum]

// }
