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

//First attempt, disaster yo
function getMiddle(s){
    //   Split chars into individual elements of an array
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
    



//Second full but suboptimal soln that I'm actually super proud of GUYS

//P: Given a word (wooo) (string?). Supposed to return the middle character of the word if it is odd # of character, and middle two character of word if it is even # of character
//R:Return string of middle character(s)
//E:
//P: make a function that takes in a str
function getMiddle(str){
    function getMiddle(str){
        //Break the string up
    
        //Find out how long the string is (even or odd)
        if(str.length % 2 === 0){
          const newStr = []
          const index = str.length/2
          newStr.push(str[index-1])
          newStr.push(str[index])
          return newStr.join('')
        }else{
            const index = Math.floor(str.length/2)
            return str[index]
        }
        //If it's even, use something to get the middle two letters of the string
        //join those two middle letters tgother 
        //If it's odd, use something to get the middle letter of the string
        //Return bb
    }
}
//Third, prolly better soln
function getMiddle(s){
    return (s.length % 2) ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2];
}

//Fourth soln


console.log(getMiddle('test'),'es')
console.log(getMiddle('A'),'A')
console.log(getMiddle('testing'),'t')