// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321


//P: Takes in an integer (is it always an integer?). Non-negative integer; does that include 0? Should return it with digits in descending order.
//R: An integer with #s in descending order.
//E: 
//P: Make a function that takes in an integer
function descendingOrder(int){
    //Grab integer and make it into a string
    let string = int.toString().split('').sort((a,b)=>b-a).join('')
    //Split string by each character
    //Sort
    //Put string back together
    //Make it back into an integer
    return Number(string)
}

console.log(descendingOrder(42145),54421)
console.log(descendingOrder(145263),654321)
console.log(descendingOrder(123456789),987654321)

//Kind of wild how easy this one was for me. I don't think it even took 10 minutes. It's so cool to see that I'm progressing in this way. It used to take me SO LONG to get any coding challenges done and now a ton of them are just a goddamn breeze.
//#smallwins