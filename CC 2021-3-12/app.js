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

