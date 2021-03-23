//Please create a function that takes in a number. Print all the numbers from 1 to that number in the console, but skip any number that when multiplied by three is divisible by 2.

function allNumsFrom1ToNum(num) {

    for (let i = 1; i <= num - 1; i++) {
        let final = (i * 3) % 2;
        if (final !== 0) {
            console.log(i);
        }
    }
}
allNumsFrom1ToNum(45);


// for (let i = 1; i <= lastNum; i++) {
//            let check = (i * 3) % 2;
//                if (check !== 0) {
//                console.log(i);
//            }


        //Define variable
//    let finalResult = document.querySelector("#putResultHere").innerHTML
        // Console log all numbers from 1 to num
        // Find answer of num * 3 
//        let result = num * 3
        // If it is divisible by 2, skip
//        if (result % 2 !== 0) {
//        console.log(result)