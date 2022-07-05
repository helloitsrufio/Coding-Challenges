//https://www.codewars.com/kata/526571aae218b8ee490006f4: 6 kyu

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//Function needs to take in a num as an input. Then it needs to return the # of bits that are = to 1 in the binary representation of that num. The num will always be non-negative. So basically it's counting ones in the binary representation of the num param.
//Return a number (the num of 1s in the binary num)
//Make a function that takes in a num

//----------first attempt----------
function countBits(num){
    if(num === 1){
        return 1
    }else if(num === 0){
        return '0'
    }
    //if the number is non negative, then
    else if(num > 0) 
        {num === 1{
            return '1'
        }
        ||
        num === 0{
            return '0'
        }
        //if the num is 1, return '1'
        //if the num is 0, return '0'
        //else do Math.floor(num/2) and add num % 2
    //return}
}}

//ok, so this is not working and I actually am not sure how it's supposed to work. This is reminiscent of a convert-to-binary soln I found online. I just don't get it, so I'm going to try a different approach. 

//----------second attempt----------
function countBits(num){
    //convert to decimals by doing num.toString (this works because the method will convert the num you give it to a string, and I guess this means it turns it to a binary num when you put 2 in as the radix?) and set it equal to a different val
    const binary = num.toString(2)
    let splitBinary = binary.split('')
    return splitBinary.filter(e=>e == '1').length

}
console.log(countBits(1234),5)
console.log(countBits(1.23),28)
console.log(countBits(5),2)

//So I originally thought I'd have to use a count var, but that actually didn't end up working out. I had to set the binary arr as a var. Then I was trying to map through and apply a condition, but that wasn't working out for me either. I realized that I just wanted to count the ones, and I could do that if I filtered out everything that wasn't a one. If I tacked on a .length to the end, then the count var was completely redundant.
//The trickiest thing here was trying to make something a binary num. But it's fairly simple, even if I still don't understand it. 