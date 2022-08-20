// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
//     You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

//P: Wtf is a factor of base. -> evenly divides (w/o a remainder prolly) Trying to find if a factor is a factor of base. Factors are numbers you can multiply together to get another number. Can use mod to check for remainder. Base is non-negative, factor is positive. Can it ever be empty?
//R: Should return true if x is a factor of y
//E:


console.log(checkForFactor(3,2),false)
console.log(checkForFactor(9,3),true)
console.log(checkForFactor(),undefined)

//P:first make a function that takes in a base and a factor
function checkForFactor (base, factor) {
    //have to check whether base % factor is 0
    return base % factor === 0 ? true : false
    //if yes, return true
    //if no, return false
  }
  //Initially we've made this in JS because that's what I know. It wasn't too hard to do; I figured we should do a ternary because I didn't realize that the first part would already return a boolean. 
  //We also tried to put in undefined, but I guess we didn't need to? Esp when we got to TS. 