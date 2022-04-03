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
   //If they aren't, return false, nothing else happens in this whole functions. 
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
        //iterating thru the string
        if(strMap[str[i]]){
            //if strMap object has the current element being iterated thru in it,
           strMap[str[i]]++
           //increase its value ('n': 2 <- that's the value)
        }else{
            strMap[str[i]] = 1
            //or else if it's not there, set the value as 1 (and basically put it in there.)
        }
    }
    for(i=0;i<tea.length;i++){
        //same sort of thing, logic
        if(map[tea[i]]){
           map[tea[i]]++
        }else{
            map[tea[i]] = 1
        }
    }
    //
    //so we make a variable.
    //Object.keys(map) gives me the keys of the map (so in 'n': 2, it would give us 'n'). 
    //Making a copy of the object, but making sure to insert the keys in alphabetical order so we can compare the two maps.
    //Then we've got our reduce.
    //So the initial value is at the end, the empty obj. The empty object is an empty map. That lets us fill it with values on line 67. That will be the first loop 
    //Next time around, the acc is the one on line 67
    const sortedMap = Object.keys(map).sort().reduce((accumulator, key) => {
        //accumulator.set(key, map[key]). If you use set on an empty obj it will give it a new key value pair ({key: map[key]})
        //the acc is the previous value
	accumulator[key] = map[key];
    //give acc a new key value pair. key will be key, and the value will be map[key]. Map[key] is the value (the num)
    return accumulator;
}, {})

//do the same thing to the other map
const sortedStrMap = Object.keys(strMap).sort().reduce((accumulator, key) => {
	accumulator[key] = strMap[key];
    return accumulator;
}, {})

    //all right, so now we've got two alphabetically sorted maps under new names (sortedStrMap and sortedMap). We can't just set these equal to each other because they are objects. So we stick them in JSON.stringify. This converts objects into strings and therefore 'primitives' and lets a equality thingy go down.
    //will only return if they are the same.
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




