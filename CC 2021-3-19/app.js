// Make sure you understand these before taking a look at the question:
// Objects (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

// 👆🏾  Make sure you remember/review bracket notation for objects!  You can check if a property exists and increment a value tied to that property HINT HINT!

    // Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    // What if the string is empty? Then the result should be empty object literal, {}.

// From: https://www.codewars.com/kata/52efefcbcdf57161d4000091

//P: If it is an empty string, then it should return an empty obj literal. Will it ever have special chars? Does capitalization matter? Do spaces matter?
//R: Should return an object in which  there are whatever letters are in the string and a num attached with how much they return. 
//E: See console logs.
//P: Make a function that takes in a str
    function occurringChars(str){
//   Split string into an array and subsequent object. 
       let newStr = {str.split('')}
//   Loop thru chars
        for(i=0; i<newStr; i++){
            //   Use bracket notation to add 1 to value for that letter in obj

            //   Or add that letter as a property with val of 1
        }
    }

//Teacher soln

function occurringChars(str){
//create obj
    let countObj = {}
    //loop thru each char and do a check to see if char is in obj already
    for(const c of str){
    //if it is, +1 -- if this val is inside of obj,
    if(countObj[c]){
        countObj[c]++
    }else{ //if it isn't, add val of 1
        countObj[c] = 1
    }}
    //return obj
    return countObj
}
console.log(occurringChars('aba'), {'a': 2, 'b': 1})
console.log(occurringChars('abba'), {'a': 2, 'b': 2})
console.log(occurringChars(''), {})
//I did not get anywhere near to this soln unfortunately. Apparently it's the beginning of hashmaps.






// Hint: loop through the characters and use bracket notation to add one to the value for that letter in the object or add that letter as a property of the object with the value of 1
