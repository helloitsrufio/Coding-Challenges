//from https://www.codewars.com/kata/546e2562b03326a88e000020

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// -----my attempt-----

//What does it mean to concatenate? Push all integers together into one, but don't add. Will we ever been given an empty num? Or special characters? 
//Should return the original number, but each number squared, and then all those numbers pushed together (concatenated)

//Make a function that takes in a num (param)
function concat(num){
    //Make the number a string
    let newNum = String(num).split('')
    //split number into an array

    //change string nums back to reg nums
    for(i=0;i<newNum.length;i++){
         String(Math.pow(newNum[i],2))
    }
    //square nums

    //turn nums back to string
    return Number(newNum.join(''))
    //join num strings together and return.
}
//all right. The problem I'm having here is this. I am getting everything right up to line 20. It is taking each number, squaring it, and turning it into a string. If I try to assign this to a new var and push these perf numbers there, it doesn't work. 

//When I try to return the newNum with all the strings joined and turned back to a number, it literally just returns the input. It's v frustrating.

console.log(concat(1234),14916)
console.log(concat(556),252536)
console.log(concat('x'),err)


//-----someone on codewars' soln-----
function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  }
  //All right, let's work through this mf.
  //First, they wrap the whole shebang in Number, making it a number. 
  //Second, they add an empty string and number, which may make it a str? Looks like it's IMPLICIT TYPE COERCION, the process of converting value from one type to another. So adding an empty str to the num param makes it a string.
  //Third, they split the new string.
  //Fourth, they map through the newly split string. They say that given val, return val*val. It's a bit confusing to me how they could be mapping through this at this point because it's still an arr full of strings. And it is, because the next step is joining that all together.
  //All in all, it doesn't make a ton of sense to me, but it does a little bit.


  //-----another codewars soln-----
  function squareDigits(num){
    return +num.toString().split('').map(i => i*i).join('');
  }
  //Ok, I think I was missing something big here. This solution tries to do largely the same thing. The map is the same as well. But remember how I was like, "Idk how they can do that, it's a string"? Well, here's what I'm thinking now. 
  // if you have a string that's a number, and you multiply it by another number or another string number, maybe that triggers the implicit type coercion. The computer be like, "Tf this is not a number. But also...kinda is? And they want to multiply it? 'aight then, leggo."
  //But in this one I'm not seeing where they turn it back into a number. Unless the + at the very beginning (right after 'return') makes it a number through implicit type coercion? Prolly.
    //Upon reading the comments, apparently the + in front of num does parse the string into a number. Huh. It's a unary op? https://scotch.io/tutorials/javascript-unary-operators-simple-and-useful