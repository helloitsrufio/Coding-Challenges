// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])


// From: https://www.codewars.com/kata/59f08f89a5e129c543000069


//P: All lowercase, no spaces. Given an array of strings. Any numbers or special chars ever?
//R: Should return an arr of strings that each have only one occurrence of a letter.
//E: See console logs
//P: Make a function that takes in an array
    function dup(arr){
        //Map thru arr 
        arr.toLowerCase().map(w => {
            let newW = w.split('').filter(i => i !== i+1)
            return newW.join('')}
            // return newW.filter(i => i !== i+1)})
        //Each return in map should be string split
        //Filter for each letter that is != the one before it
        //Join and return
    }

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(dup(["kelless","keenness"]), ['keles','kenes'])

// hint: map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before! 

//so this is working, but the filter is not working. The conditions aren't actually filtering out whether the letters are the same or not.
//It's interesting too, because I feel like I followed the hint pretty well...but it still isn't working.


//Classmate:
function dup(arr){
    //Map thru arr 
    arr.map(w => {
        let newW = w.toLowerCase().split('').filter((e,i,a) => e !== a[i+1])//makes a copy of original arr so you don't have to take edge cases into account.
        return newW.join('')}

}


//Teacher soln:

function removeDupesFromStr(arr){
    //map -> str split (individual letters), filter out letters where letter doesn't equal prev letter. Then join back together
    return arr.map( str => str.split('').filter((l,i,a) => l != a[i-1]).join(''))//filter is saying: find me letters that don't equal the letter that came before. Keep those acceptable letters that we put together in one string and returned map. 
    //Map will run the amount of times equiv to amount of words. 
}
//mapping thru each word, and then we're going to do something to filter out dup letters. Will return word minus dup chars. 














