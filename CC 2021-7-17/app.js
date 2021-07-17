// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.


//P: Will I ever be given an empty string? Probs not. Will I get special chars? I think I could. If odd, return the middle char. 
//R: Should return the middle of whatever string is given. 
//E: ex. 1: if given 'Ruth' -> returns 'ut'
//   ex. 2: if given 'coding' -> returns 'di'
//   ex. 3: if given 'Sam' -> returns 'a'
//P: Make a function that takes in one parameter
function getMiddle(s){
    //   Split chars into individual elements of an array
    alert(typeof s)
    let S = s.toString.split('')
    let i = 0
    if(S[i] !== undefined){
        return getMiddle(i + 1)
    }else {
        return S[Math.floor(i / 2)]
    }
    //   Divide by 2 and give middle two elements back
    // S[i] % 2 : 
    //   Else give middle element back
    //   Join together and return
    }
    //Going into this challenge, I didn't think I'd be able to get it, and I was right. But I did spend 20 minutes thinking through it and looking through how others did it similarly. The above "soln" is from the internet and, to be completely honest, I don't really understand what's going on in it despite trying to.
    
    //Looking at solns on codewars:
    function getMiddle(s)
    {
      return s.slice((s.length-1)/2, s.length/2+1);
    }
    //I haven't really even been understanding the solns, but this person explained this soln like this:
    
    // "s" here is a variable name which is of type <String> in JavaScript. --RUTH: Makes sense
    // All the operations inside the paranthesis (s.length-1)/2, s.length/2+1) uses the property length which returns the size of a String type (basically counting the number of characters in a word or sentence) --RUTH: Makes sense
    // (s.length-1)/2 ( Puts a marker exactly before the middle character (think about this in indexes so you always start at 0) in Strings even other iterables. --RUTH: Nope. doesn't make sense, even having it explained to me. I'm not sure why. You take the last char/index and divide it by two, which somehow puts a marker exactly before the middle char? What?
    // (s.length/2+1) will return exactly and index which is after the middle character --RUTH: This one makes a little more sense. You get the last index, divide it by 2, and then add one, so it will return the index after the middle char. Ok. 
    // The method slice() can be attach to the type String like this String.slice(beginIndex[, endIndex]) --RUTH: This is not one I understood, but I can see why they would put the two (essentially) functions in for the indecies. 
    // So beginIndex is for => (s.length-1)/2 and endIndex which is an optional parameter but necessary here will be => (s.lenght/2+1) and it is excluded as an upper limit (Kind of [4, 6[ in algebra I think)
    // on "s" which is of <String> type attached to the method slice() with the upper parameters will just strip the value in between the beginIndex and endIndex and return it to you. Ex:( in [4, 6[ The value of the character at index 5 will be returned)
    
    //EVEN HAVING IT EXPLAINED TO ME, I feel like ???? This is only a 7kyu problem. Why is it so difficult for me?? All the solns basically do something like the given soln above. Hopefully I can come back to this and understand it better, though I'm not sure what I would do to do that. 
    