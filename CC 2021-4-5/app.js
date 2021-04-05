// Easy one since it is late and just in case... Make sure you talk through prep and Big O! 

// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// From: https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

//P: Does it take in special characters? Capitalization? Will you ever be given anything besides an integer? Will you ever be given nothing? 
//R: Should print out nums and fizz if div by 2, buzz if div by 3, and fizz buzz if div by 2 and 3
//E: See console logs
//P:
//  Make a function that takes in a num

function fizzBuzz(num){
    for(i=0;i<=num; i++){
        //  If num / 2, then print 'fizz'
    if(num % 2){    
        console.log('fizz')
        //  If num / 3, then print 'buzz'
    }else(num % 3){ 
        console.log('buzz')
        //  If num / 2 & 3, then print 'fizz buzz'
    }else(num % 2 && num % 3){
        console.log('fizz buzz')
    }
    }}

    //fucking fizz buzz not working. I felt like this made a lot of sense! I tried to print and that didn't work, so I tried console logging it instead, and that didn't work either. I inserted a for loop so that it would go through each num up to the num given, but it's not returning *anything*. 

