// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//First Try:

function countBy(x, n) {
    var z = [];
   for(let i = 0; i < x; i++){
     if(x[i] % n == 0){
       z.push(x[i]); 
     }
   }
    return z;
  }

  //Below is answer I used from internet, but it didn't work. I couldn't figure out why.
  
  // function multiplesOf(numbers, number) { // add second argument
  //   var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
  //   for (var i = 0; i < numbers.length; i++) {
  //     if (numbers[i] % number === 0) { // divide by the number
  //       multiples.push(numbers[i]); // add the current multiple found to the multiples array
  //     }
  //   }
  
  //   return multiples;
  // }


  //Turns out that I just needed to change z.push(x[i]) to z.push(i * x). Why is this? Well, it seems that since it is a MULTIPLE, it needs to be multiplied, hence the *. The i is the iteration of x, and it needs to be a multiple of n, so by multiplying it by n that makes it a multiple of n? I believe. Very confusing and somewhat frustrating. 