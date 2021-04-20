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