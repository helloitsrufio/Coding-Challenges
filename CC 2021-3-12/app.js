// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//P: Will it always be a string? Any special characters at all? Do spaces count as characters? What happens if there are two chars that occur most often, not just one?
//R: Should return 1 char that occurs most in str.
//E: See console logs.
//P: Make a function that takes in a string.
    function maxChars(str){
        //Make an empty var
        let count = 0
        //Split string to individual letters
        str.split('')
        //Make a for loop where you see if one char is the same as the other
        for(char of chars){
        //If it is, then +1 to empty var
            if(char === char-1){
                count +=
            }        //If it isn't, 
        }

    }
    //not sure how to finish this. I get get and return the count, but that won't do much for me.

console.log(maxChars('Fishsticks'), 's')
console.log(maxChars('Be good.'), 'o')
console.log(maxChars('Ruth Reed'), 's')
//exponential increase in big O notation

function maxChars(str){
    //setting up prob to have 3 vars
        //wheree you add/increment each letter
        let charMap = {},
            //keep count
            count = 0,
            //actual char to return at end
            maxChar = null
            //I want each char out of string
    
            //this builds our map
        for(const char of str){
            //Loop thru each char and grab individual letters in str. Then saying, look at map. Is that char in the map plus one or setting that val in the map? <- the 1 is a default.
            charMap[char] = charMap[char] + 1 || 1
        }
        //loops thru map that we created and seeing if the val of each char is greater than the count prev
            //for in b/c it's a obj
        for(const char in charMap){
            //In charMap and on the char we're on, is that greater than our count? Has to be greater than 1
            if(charMap[char] > count){
                // Set count to new val
                count = charMap[char]
                //whatever char we're at becomes the max char
                maxChar = char
            }
        }
        return maxChar
    }
    //I don't have a very good grasp on hashmaps, but I think I understand what's happening here. 