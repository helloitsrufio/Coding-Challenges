// https://www.codewars.com/kata/563b74ddd19a3ad462000054/solutions/javascript

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//------- First attempt -------

//Parameters: Will take in one parameter (size). Will return a string, and always a string. The string will be composed of 
//1s and 0s. The string will always start with one. If size = 6, it wil be 10x3. If size = 4, it will be 10x2, If it's size 12
//it will be 10x6
//Returns: Will return something starting with 1 and composed of 10 in some iteration.
//Examples: If size = 2, then it will return 10. If size = 8, then it will return 10x4.
//Pseudocode:
//Make a function that takes in a parameter.
function stringy(size) {
    //Make an if()then situation
  //   if(size){
      //make a variable that is '10'
      let variable = '10'
      //Put in and return formula, which is '10' + repeat(size/2)
      let final = Math.round(variable.repeat(size/2))
      return final.toString()
  //   }
  }

  //Didn't work out for me, got overly complicated.