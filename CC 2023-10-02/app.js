// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let capitalizedStr = str.toUpperCase()
    let setStr = Set(capitalizedStr)
    if(capitalizedStr === setStr){
        return true
    }
    // for(i=0;i<=capitalizedStr.length;i++){
    //     if(i == i+1){
    //         return false
    //     }else{
    //         return true
    //     }
    // }
}

console.log(isIsogram('Dermatoglyphics'), true)
console.log(isIsogram('moose'), false)
console.log(isIsogram('aba'), false)
console.log(isIsogram('Rufio'), true)