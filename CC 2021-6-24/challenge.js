// Description:

// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5



function isDivisible(n, x, y) {
    if ((n % x === 0) && (n % y === 0)){
      return true
    }else{
      return false
    }
    }


//Thoughts:

//I was extremely surprised that I actually managed to get this not only before 20 minutes was up, but with 11 minutes to spare! I really didn't have a good idea of how to do it before starting and then remembered modulus. I haven't used modulus that much, so I wasn't very familiar with how it worked. I read up on it and determined that I would have to do n % x or something like that, but I wasn't setting it equal to 0. I was doing more var resultofX = n % 2, which obviously didn't work. But I saw online that to determine if a # was even, you did n % 2 === 0. Well, if we want both of our numbers to divide into n, they have to do so cleanly. And it worked! I'm extremely pleased with myself, especially since it's been six weeks since I coded last.