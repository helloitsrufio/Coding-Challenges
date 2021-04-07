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

//Teacher soln:
function fizzBuzz(num){
    //loop 1 to num
    for(i=1; i<=num; i++){
//if % 2, fizz; % 3 is buzz; %2&3 fizzbuzz. Need to do the %2&3 edgecase first.
        if(i % 6 ===0){
            console.log('fizzbuzz')
        }else if(i % 2 === 0){
            console.log('fizz')
        }else if(i % 3 === 0){
            console.log('buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz(20)
//very says to start at 1, not 0!

//O(n) soln because you're iterating once thru each val.

//So I almost got this. I did the for loop, but then I didn't use 'i' at all. That was a clear mistake. And then I needed to do the 2&3 edgecase first (above it's %6). But I also didn't set it equal to 0 at all. Finally, I did a bunch of elses, and you can only have one else. I needed to do 'else if'. 
//It is clear now to me what I did wrong here. 