//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//gon be a function that returns sum of two lowest pos nums in an array of at least 4 nums. So we are given an array of 4+ nums. No floats (num with decimal vals), no non positive integers (neg?)It says an arr of 4+ nums, but does that mean that we have to make sure that that's a thing, OR can we just say that that's a thing? 
// Return sum of two lowest integers in arr
//E

console.log(sumTwoLowest([10, 343445353, 3453445, 3453545353453]),3453455)
console.log(sumTwoLowest([19, 5, 42, 2, 77]),7)
console.log(sumTwoLowest([]),undefined)

//P: we are going to need to look through the array, get the two lowest nums, sum, and return them.
//Make a function that teakes in an array
function sumTwoLowest(arr){
    arr.sort((a,b)=>a-b)
    return arr[0] += arr[1]
    //sort arr in numerical order 
    //get arr[0] and arr[1] and sum them?
}

//We did great, congrats us, but apparently it is better practice to copy arr first and then manipulate and then return copy. How do we do that do that tho

//SECOND SOLN
function sumTwoLowest(arr){
    let newArr = arr.slice()
      newArr.sort((a,b)=>a-b)
      return newArr[0] += newArr[1]
      //sort arr in numerical order 
      //get arr[0] and arr[1] and sum them?
  }
  //This only differs through adding .slice(), which makes a copy of the arr. Apparently we don't actually want to change our og array, we just want to change a copy of it (best practices?)

