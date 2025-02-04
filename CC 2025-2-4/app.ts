//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
//PARAM: Input is a number. We need to print out every integer from 1 to the given number (n). If the printed num is divisible by 3, we print out fizz, when it's divisible by 5, we print out buzz, and when it's divisible by both, we print out fizzbuzz. Input will always be a number, should only go up to n. 
//RETURN: Prints to console for each number divisible by 3 (fizz), 5 (buzz), and 3 & 5 (fizzbuzz)
//EXAMPLES:

//1. If we were given n = 5, then we would get
//FIZZ
//BUZZ

//2. If we were given n = 30, then we would get
// FIZZ
// BUZZ
// FIZZ
// BUZZ
// FIZZ
// FIZZBUZZ
// FIZZ
// BUZZ
// FIZZ
// FIZZ
// BUZZ
// FIZZ
// FIZZBUZZ

//3. If we are given 16, we would get
// FIZZ
// BUZZ
// FIZZ
// BUZZ
// FIZZ
// FIZZBUZZ
//PSEUDOCODE:
// Make a function that takes in a number n
function fizzbuzz(n: number){
   let results:string[] =[]
    for(let i = 1; i<=n; i++){
       // make a conditional where
 // if n divided by 3 & 5 = 1, log 'fizzbuzz'
       if(((i % 3) == 0) && ((i % 5)==0)){
          results.push('FIZZBUZZ')
      }
      // if n divided by 3 = 1, log 'fizz'
       else if((i % 3)== 0){
          results.push('FIZZ')
      }
      // if n divided by 5 = 1, log 'buzz'
      else if((i%5)==0){
          results.push('BUZZ')
    }
 }
 return results
 }
 
 console.log(fizzbuzz(5))
 console.log(fizzbuzz(30))
 console.log(fizzbuzz(16))

 //Had to work with chatgpt because I forgot how loops work and was getting undefined when I wasn't using an arr. I also forgot how && worked, %, and .push(). Whoops lmao

 //P: WHAT AM I TAKING IN
 //R: WHAT AM I SPITTING OUT
 //Examples
 //P