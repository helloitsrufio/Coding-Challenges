//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrOfNums(arr){
    for(i=0;i<arr.length;i++){
        return arr.map(Math.pow(arr[i])
    }
}
//Didn't get it to work in the time frame that I assigned for myself.

//Teacher solution
let newArr = num => num.map(num => num**2)
//Simple, but something I didn't think about. You can just map through num and then say for each el, square it (**2)