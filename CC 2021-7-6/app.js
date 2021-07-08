// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
//--------------------------

function digital_root(n) {
//   // First I need to take the sum of the digits of a given num n. 
//   // If that value has more than one digit, reduce until single digit.
//   // Input will always be a non-negative integer.
  
//   //Turn number into string.
  n.toString().split('')
//   //Separate digits in string into separate strings 
  
//   //Turn them into #s
  Number(n)
//   //Add individual numbers of string n and put into variable.
  let newNum = n[i-1]+n[i]
//    //Return variable from the last string. 
  if(newNum >= 9){
    return newNum.Number()
  }else{
//     //If variable is more than 10, turn into string. 
    newNum.toString().split('')
    newNum.Number()
    let moreThan10Num = n[i-1]+n[i]
    return moreThan10Num;
  }
}

//My first attempt I wrote pseudocode. I think it helped me even though I didn't finish the problem. I determined that I'd have to turn the number into a string to separate it and then revert it back to a number. Seems a bit clunky; I'm sure there is a better way to do this. 
//Then I made a new variable to add the one or more numbers together, which I tried to do by the i variable and i-1. 
//I did an if conditional where if the var was less than nine, it would return the variable. I attached the Number function to this, but looking back, I don't think that was necessary since it was already a  umber.
//If it didn't fit into those conditions (ie was more than one digit), I had it repeat the exact same process but starting with 'newNum' instead of 'n' and ending with 'moreThan10Num'.
//This came back with an error code on the Number() function, so I looked it up to see if I was using it right. I wasn't. What I wanted was the parseFloat() function, so I did it all again with that instead:

function digital_root(n) {
  n.toString().split('')
  parseFloat(n)
  let newNum = n[i-1]+n[i]
  let i = 0
  if(newNum >= 9){
    return newNum.Number()
  }else{
    newNum.toString().split('')
    parseFloat(newNum)
    let moreThan10Num = n[i-1]+n[i]
    return moreThan10Num;
}}
//I thought this would be good, but then it started having beef with 'function', which I still don't understand, and I missed a curly bracket at the very end of the funciton. It also got mad at me and told me that I hadn't defined i, so I tried to do that as well. 
//Once I tested this, it didn't come back with an error, but rather a NaN. That's something, but not quite there. 



//After reviewing the solutions:
//Well, I don't understand this very well, esp since it's recursion and idk what that is. BUT what I have gathered is that I don't need anything complex for numbers under 9. I can just return all numbers 9 and under and then have a more complicated method for all numbers 10+.

//Someone's answer that actually made sense to me:
function digital_root(n) {
    if(n < 10) {
      return n;
    }
    n = n.toString().split("");
    var result = 0;
    for(var i = 0; i < n.length; i++) {
      result += parseInt(n[i]);
    }
    return result < 10 ? result : digital_root(result);
  }
  //The difference is that they executed a for loop where I just tried to assign i = 0, started with 0 (result), and then did parseInt on n[i]. I got the n[i] bit at least. I like the turnary at the end. I'm not sure what the difference between result and digital_root(result) is.