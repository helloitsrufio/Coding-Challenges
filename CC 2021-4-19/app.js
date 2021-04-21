// // Given a string of words, you need to find the highest scoring word.

// // Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// // You need to return the highest scoring word as a string.

// // If two words score the same, return the word that appears earliest in the original string.

// // All letters will be lowercase and all inputs will be valid.

// // Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
// // Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
// // Test.assertEquals(high('take me to semynak'), 'semynak');

//Hint: Remember our past problem that used an alphabet string. Think about reduce, indexOf, and creating a function to check the score then looping through your words

// From: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

//P:All letters are lowercase. All inputs are valid (special chars included); do I need unicode? Each letter has an accompanying number that stands for points. If there are two identical words, the first will score higher. What would an empty string be valued? 
//R: It only returns one word: the highest scoring one. 
//E: See console logs below:
//P: Have a function that takes in a string.
    function high(str){
//   Split string based on ' ', and then split further based on letters. 
        let splitUpWords = str.split(' ')
        let individualLetters = splitUpWords.split('')
        for(i=0; i<individualLetters.length; i++){
            if(individualLetters[i].charCodeAt() < individualLetters[i-1].charCodeAt()){
                return individualLetters[i].join('')
            }
        }
//   Make a loop where we get i, and then use the index of i. 
    }


console.log(high('man i need a taxi up to ubud'), 'taxi')
console.log(high('what time are we climbing up the volcano'), 'volcano')
console.log(high('take me to semynak'), 'semynak')

//Honestly feeling very stuck and lost. I don't even know how to reattempt because I'm not sure what I'm doing in the first place, you know?


//Looking at teacher soln:
// In order to be able to total and compare the points, we need to do something with each part of the string. 
// Letters: 
//  Give each letter an altered index of 1-26 vs the standard given 0-25. 
//      Ex: ‘abc’ is normally = indexes [0,1,2], and we want it to be ‘abc’ = indexes [1,2,3]
//  Get the ‘points’ for each letter via their new altered index, which is off by one in the example. 
//   Add those points together to create a sum, which is the total number of points for that word.
//      Ex: ‘aba’ === 1,2,1 added as 1+2+1=4, the score for ‘aba’ is 4.
// Words: 
//  Determine the score of the word Ex: ‘aba’ = 4
//  Compare each word’s score Ex: ‘aba’ = 4 vs ‘ba’ = 3
// Whole string: 
//  determine the highest scoring word within it.
function high(str) {
    //so they assign a var to all the letters of the alphabet together.
    const alphabet = ' abcdefghijklmnopqrstuvwxyz'
    //they create another var that, given word, you split it based on each letter, THEN
    // reduce. Given an accumulator and a current Val, you add the accumulator to the alphabet var.indexOf(currentVal), and you start at 0. All this is assigned to the val of 'wordScore'.
    //I honestly don't understand this line.
    const wordScore = word => word.split('').reduce((a,c)=> a + alphabet.indexOf(c), 0)
    //Set an empty string var
    let highestWord = ''
    //Set a min count for the highest count.
    let highestCount = 0
    //split the string based on spaces (separating into individual words)
    //Then, for each word, given w, 
    //Make a new var, scoreCheck, and set it to the val of wordScore(w)
    str.split(' ').forEach(w=>{
      const scoreCheck = wordScore(w)
    //if scoreCheck val is higher than the highest count, make that word the highest word.
      if (scoreCheck > highestCount) {
      highestWord = w
      //and set it equal to scoreCheck
      highestCount = scoreCheck
      }
  })
  //Then return.
  return highestWord
  }
console.log(high('what time are we climbing up the volcano'));
//...Honestly, that made 0 sense. I'm going to check another soln.

