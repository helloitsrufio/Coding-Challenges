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
    for(const letter in map){
        if(map[letter] !== strMap[letter]){
          return false
        }
      }
    return true
};
    
console.log(function isAnagram('anagram', 'nagaram'),true)
console.log(function isAnagram('rat', 'car'),false)
console.log(function isAnagram('o', 'rufio'),false)




