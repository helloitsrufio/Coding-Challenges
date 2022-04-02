// https://leetcode.com/problems/valid-anagram/ - Valid Anagram


//P: We are given two strings: str & tea. Supposed to return true if tea is an anagram of str, and should return false if tea is not an anagram of str. The strings consist of LOWERCASE English letters (given string). 
//What is an anagram? It's a word or phrase formed by rearranging the letters of a different word or phrase, using all the og letters exactly once. (basically a word all mixed up!)
//R: True if tea is anagram of str, false if tea is NOT anagram of str.
//E:
//P: Make a function that takes in two strings.

//HASHMAP:
 //The main application of hashmap is to find and retrieve data quickly
    //Hashmaps and hash tables use key and value pairs where the hashed key refers to the index in the array
    //make a obj
    
    //make a loop
    //does it fit condition? no? continue loop?
    //if yes, pop the value into the map

//------------SOLUTION #1-------------

var isAnagram = function(str, tea) {
    //make two map objects
    let strMap = {}
    let map = {}
   //first of all, we want to see if str and tea are equivalent lengths. 
    if(str.length !== tea.length){
        return false
    }
    //we want to go through each string and count how many times a letter occurs. 
        // {'a': 1, 'n': 1....}
    // We have this count for each letter somewhere
    // And we compare the two counts with the accompanying letters. If they are the same, return true, else return false. 
        //if not, return false
        //if yes, then we start breaking the strings up.
            // Map thru the arr of the broken up str char AND
                //see if it is in map object via map[]
                //if it's not, then add it
                //if it is, then 
    for(i=0;i<str.length;i++){
        if(strMap[str[i]]){
           strMap[str[i]]++
        }else{
            strMap[str[i]] = 1
        }
    }
    for(i=0;i<tea.length;i++){
        if(map[tea[i]]){
           map[tea[i]]++
        }else{
            map[tea[i]] = 1
        }
    }
    const sortedMap = Object.keys(map).sort().reduce((accumulator, key) => {
	accumulator[key] = map[key];
    return accumulator;
}, {})

const sortedStrMap = Object.keys(strMap).sort().reduce((accumulator, key) => {
	accumulator[key] = strMap[key];
    return accumulator;
}, {})
    return JSON.stringify(sortedStrMap) === JSON.stringify(sortedMap)
};

//------------SOLUTION #2-------------
var isAnagram = function(str, tea) {
    let strMap = {}
    //make two map objects
    let map = {}
    if(str.length !== tea.length){
        //first of all, we want to see if str and tea are equivalent lengths. If they aren't, return false. 
        return false
    }
    
    for(i=0;i<str.length;i++){
        //next we do a for loop (I think this is the hash map part) where we go through and we say, remember that whole strMap empty object? Well, if it has whatever element we're cycling thru right now (like n)
        if(strMap[str[i]]){
            //then increment it by 1. This is an object, so it's key value pairs, like so: 'n': 1
           strMap[str[i]]++
        }else{
            strMap[str[i]] = 1
            //if it isn't in strMap, then set its value to 1 and move to the next element.
        }
    }
    
    for(i=0;i<tea.length;i++){
        if(map[tea[i]]){
           map[tea[i]]++
        }else{
            map[tea[i]] = 1
        }
    }
    //same logic as for the above
    
    for(const letter in map){
        //so what's up here is that we are grabbing 'letter' out of map. That literally will just cycle thru map and grab each letter on each iteration.
        if(map[letter] !== strMap[letter]){
            //then we say, if map has that letter with that value (like 1), and strMap doesn't, return false. 
          return false
        }
      }
    return true
    //we return true after all of this. If it were false at this point, it would have already returned false. but it hasn't! So therefore it is true.
};
    
console.log(function isAnagram('anagram', 'nagaram'),true)
console.log(function isAnagram('rat', 'car'),false)
console.log(function isAnagram('o', 'rufio'),false)




