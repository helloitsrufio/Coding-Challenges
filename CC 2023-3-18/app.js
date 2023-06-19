// Emotional Sort ( ︶︿︶)

// You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

//     :D -> Super Happy
//     :) -> Happy
//     :| -> Normal
//     :( -> Sad
//     T_T -> Super Sad

// Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

// And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

// Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

//     Super Happy -> Happy -> Normal -> Sad -> Super Sad

// If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

//     Super Sad -> Sad -> Normal -> Happy -> Super Happy

// Example:

// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]

// More in test cases!

// Notes:

//     The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
//     All emotions will be valid

//P: Parameters - two params, one is the arr you take in, one is a boolean value for which if true, then sort happy => sad (descending); if false, sort sad => happy (ascending)
//If arr is empty, return an empty arr
//Probs ignore if input is invalid
//R: Should return sorted arr
//E: [':D', ':(', ':)']
console.log(sortEmotions([':D', ':|', ':)', ':(', ':D'], true), [ ':D', ':D', ':)', ':|', ':(' ])
console.log(sortEmotions([':D', ':|', ':)', ':(', ':D'], false), [ ':(', ':|', ':)', ':D', ':D' ])
console.log(sortEmotions([], false), [])

//P: Make a function that takes in two params: arr and order
function sortEmotions(arr, order){
    let nums = {
    ':D': 1,
    ':)': 2,
    ':|': 3,
    ':(': 4,
    'T_T': 5
}
    if (arr.length === 0){
        // if arr is empty, return empty arr
        return []
    }else if(order === true){
        // if order = true, sort descending (b-a)
        return arr.sort((a,b)=>nums[a]-nums[b])
    }else{
        // if order = false, sort ascending (a-b)
        return arr.sort((a,b)=>nums[b] - nums[a])
    }
  }
  //hello