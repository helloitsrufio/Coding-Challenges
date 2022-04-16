// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//Will I always be given an arr of nums? Will I ever be given a str or special chars?
//Return the sum of the singularly occurring nums
//Have a function that takes in a parameter
function singularNums(arr){
    //loop thru arr and filter out any numbers that occur more than once
    return arr.filter(e=>e !== e)
    // sum all the remaining nums
    //return
}

console.log(singularNums([4,5,7,5,4,8),15)
console.log(singularNums([1,1,1),0)
console.log(singularNums([1,2,2,4,6,6,5),10)