// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

//P: Input is a non negative integer (so greater than 0). Exponent ranges from 0 to n (positive?). It looks like you're given a number n. You want to count from 0 to whatever num n is (so array-like; 0, 1, 2...). Then you want to give those index nums as an exponent to the num 2. So if you were given n = 2, you'd want to do 2^0, 2^1, and 2^2.
//R: Return an array with n amount of elements in the array. Contents of array must be 2^n, 2^n-1, and 2^n-2
//E:
//P: Make a function that takes in a num n
function powersOfTwo(n){
    //make an array
    let array = []
    //loop through array and populate with 2^n. I think I can do this with a for loop, starting at 0 and ending at n
    for(i=0;i<=n;i++){
        array.push(Math.pow(2,i))
    }
    //return array
    return array
}

console.log(powersOfTwo(0),[1])
console.log(powersOfTwo(1),[1, 2])
console.log(powersOfTwo(2),[1, 2, 4])