// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.

// Note: The function accepts an integer and returns an integer


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
