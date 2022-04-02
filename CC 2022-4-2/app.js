// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

//P: It gives us a string. Will we ever be given an empty string? Yes. Will I ever be given special characters? Prolly, but it doesn't really matter if it's in a string. 
//R: Return a string that has letters that didn't have a # after them. 
//E:
//P: Make a function that takes in a string
function cleanString(s){
    //Grab the string and split it into individual characters ('a')
    let array = s.split('')
    array.forEach((val, i)=>if(array[i+1] === '#'){
        array.pop(val) 
    })

    for(i=0;i<=array.length;i++){
        if(array[i+1] === '#'){
            array.pop(val) 
        }
    }
    //Now it's an array. We want to map through
    //And say, does the character that comes after look like this? ########
    //If yeah, pop that shit off.
    //If no, skip 
    //And if it's a #, get rid of that too
    //Join the string
    //Return it. 
}


//soln 1
const cleanString = s => { 
      let ar = []; 
      for (let e of s) { 
      
        if(e != '#') { 
          ar.push(e) } 
        else if (e == '#') { 
          ar.pop() }   console.log(ar) } 
      
      return 	ar.join('') 
    
    }

// cleanString('asdf#') 
    cleanString("#abc#d##c")
// console.log(function cleanString(""abc##d######""), "")


console.log(function cleanString("asdf#"), 'asd')
console.log(function cleanString("abc#d##c"), "ac")
console.log(function cleanString(""abc##d######""), "")
