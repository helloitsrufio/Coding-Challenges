// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):

// 35231 => [1,3,2,5,3]
// 0 => [0]

// P: Give a positive num (also 0 prolly). It wants us to break up that number into an array where each num is an element. Then it wants us to reverse that array and return it. Can only be given nums
// Return an array of reversed integers (from the og input)
//Examples

console.log(reversedArray(35231),[1,3,2,5,3])
console.log(reversedArray(0),[0])
console.log(reversedArray(888),[8,8,8])

//P: 
// Make num a string
//Split string into array
// Reverse array
// Return reversed array

function reversedArray(num){
    let arr = (String(num).split('').reverse(''))
    return arr.map(n=>Number(n))
}
