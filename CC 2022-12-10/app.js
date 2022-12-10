// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//P:
//What do we want? To get the multiples of 3 or 5 below a number n and SUM THEM. If n is negative, return 0. 
//What is a number is a multiple of 3 AND 5? Then only count it once. 
//Will we always be given a number n? Prolly, let's count on it.

//R: Will return the sum of multiples of 3 and 5

//E: 

console.log(multiples(5),3)
console.log(multiples(25),143)
console.log(multiples(39),329)

//P:
//Make a function that takes in a number n
function multiples(n){
  let sum = 0
  //add an empty var
  //if n < 0, return 0
  if (n < 0){
    return 0
  }
  //do a for loop that goes up to the number n but doesn't include it
    for(i = 0; i < n; i++){
      if(i % 3 === 0 || i % 5 === 0){
        sum += i
      }
  }
  //check if the current iteration divsible by 3
  //if it is, add the number to the empty var
  //if it isn't, move on.
  //do the same for 5
  //return sum
  return sum
}
//first tryyyyyyyyyyyyy