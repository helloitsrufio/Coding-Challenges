//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str){
    let newStr = str.split('').reverse().join('')
    if(str === newStr){
        alert('It be a palindrome yeeee')
    }
}
console.log(palindrome('anna'))
console.log(palindrome('beaver'))

//Leon's soln:
const palindromeCheck = str => str.split('').reverse().join('')
palindromeCheck('racecar')