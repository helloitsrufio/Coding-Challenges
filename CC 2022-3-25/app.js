// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer

//first attempt, not successful.
function squareDigits(num){
    //Make the number a string
    let newNum = String(num).split('')
    //split number into an array

    //change string nums back to reg nums
    for(i=0;i<newNum.length;i++){
         String(Math.pow(newNum[i],2))
    }
    //square nums

    //turn nums back to string
    return Number(newNum.join(''))
    //join num strings together and return.
}

//second attempt YEAHHHH WE GOT IT

//Will be given a number. Will I ever be given a string? Will I ever be given NaN of sorts? And then it wants me to square each individual number in the given number. 
//Want whatever the given number is, but with each number squared and all pushed back together YAY
//E
//Make a function that takes in a number 
function squaredDigit(num){
    //we want to split each number into its own element in an array
    let numStr = num.toString().split('')
    //assuming the number is a string or whatever, now we square each number. 
  	return Number(numStr.map(e=>e**2).join(''))
    //maybe we do the concat thing? And return mebbe
}


console.log(squaredDigit(9119),811181)
console.log(squaredDigit(1234),14916)
console.log(squaredDigit(555),252525)
