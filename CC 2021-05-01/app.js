//Class coding challenge

//Create a function that returns the capitalization of a name. No arrays, no regex!
//leon -> Leon
//bob -> bob
// John -> John



//Parameters


//Results


//Examples


//Pseudocode

//Classmate's code. I interviewed. Also one classmate talked through it since they didn't have an accessible computer to show their code. That helped contribute to the confusion for me.

function nameO(str) {
    return str.charAt(0).toUpperCase().concat(str.slice(1, str.length-1))
}

nameO('jennifer')
"Jennife"

//Class soln:

function cap(str){
    //Can't just edit the first letter because strings are immutable. So need to create/return a new string. You can do this by adding two strings together. 
    return str[0].toUpperCase + str.slice(1)
    // str.slice(1): Will take everything after the first index. You will add this remainder to the capitalized letter in a new string. 
}
console.log(cap('leon'))


//Would like to try to work through this myself. Slice is confusing to me. 