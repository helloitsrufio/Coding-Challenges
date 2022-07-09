//https://www.codewars.com/kata/factorial-factory

// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

// You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

// Note: 0! is always equal to 1. Negative values should return null;

// For more on Factorials : http://en.wikipedia.org/wiki/Factorial

//P: Won't ever be empty; guaranteed an integer argument. If there are any non positive values, return null. 0! is always = 1. Negative is null bb. Need to write a function that takes a number and returns it as a factorial. 
//R: whatever n! = 
//E:
console.log(factorial(2),2)
console.log(factorial(3),6)
console.log(factorial(4),24)

function factorial (n) {
    // make an empty arr
    let sum = 1
  //make a for loop where we go up to whatever number n is
  for(i=1;i<=n;i++){
    sum *= i
  }
  return sum
}
