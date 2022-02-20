// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P: Are we ever given anything that isn't a string? What do we do in case of special characters? An empty string? What do we do in the case of spaces? Capitalization?
//R: Return a number. This number is how many vowels are in a string. 
//E:
//P: Make a function that takes in a str parameter
    function vowelCount(str){
        let count = 0
        let arr = str.toLowerCase().split('')
        arr.forEach(element => {
            if(element == 'a' ||
            element == 'e' ||
            element == 'i' ||
            element == 'o' ||
            element == 'u' ){
                count++
            }
        });
        return count
    }
//   Break string into words, and then into individual letters
//   make an empty variable called count
//   map thru the arr and give a condition
//   if the element is a vowel, then count + 1
//   return the count


console.log(vowelCount('Parrots are fantastic'),7)
console.log(vowelCount('Streaming is gr8'),4)
console.log(vowelCount(99),0)
console.log(vowelCount(''),0)


