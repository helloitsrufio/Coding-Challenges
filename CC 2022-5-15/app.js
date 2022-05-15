// rite a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//Function needs to accept arr of 10 integers, these integers being 0-9. Ought to return a string of the given arr of nums in the form of a phone number. Will we ever be given a empty arr? Prolly not. Ever be given anything other than an arr? Prolly not. Will we ever be given an arr of less than 10? Assume not
//R: Return the arr in phone num format (STRING). Phone num format is '(123) 456-7890'
//E:

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),"(123) 456-7890")
console.log(createPhoneNumber([4,4,4,2,1,7,8,5,9,1]),"(444) 217-8591")
console.log(createPhoneNumber([0,9,8,7,6,5,4,3,2,1]),"(098) 765-4321")

//FIRST SOLUTION:

//First we want to make a function that takes in an arr
function createPhoneNumber(arr){
    ///map through and make each one a string
    //'(arr[0]+arr[1]arr[2])' + ' arr[3]arr[4]arr[5]' + '-arr[6]arr[7]arr[8]arr[9]'
    //return it? 
    // arr.map(num=>String(num))
    return '('+arr[0]+arr[1]+arr[2]+')' +  arr[3]+arr[4]+arr[5] + '-' + arr[6]+arr[7]+arr[8]+arr[9]
}
//This was my first attempt. We had to do some finagling, but it worked. It's definitely not pretty, but again, it does work technically. 