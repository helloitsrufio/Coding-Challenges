// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes

//     All numbers are valid Int32, no need to validate them.
//     There will always be at least one number in the input string.
//     Output string must be two numbers separated by a single space, and highest number is first.

//P: There will never be an empty string. Given a string full of numbers. All numbers will be spaced out with 1 space. Will it ever have anything besides numbers in it? 
//R: A string of two numbers: High and Low, in that order. 
//E:
//P: 
//First make a functiont that takes in a string
function highAndLow(str){
    //split string into individual elements (each number should be their own string), and do it based on space
    let newStr = str.split(' ').sort((a,b)=>a-b)
   newStr.map((e)=>Number(e))
  	let answer = [newStr.length-1, newStr[0]]
  	// answer.push(newStr.length-1)
  	// answer.push(newStr[0])
	console.log(answer)
    //Make all strings numbers, sort into numerical order
    //Make an empty string where you can push the last element in the array, and THEN push the first. 
    //Return not-empty-anymore string. 
}
//So I got it to work until line 23. Then it was just return weird shit like [4, and the actual lowest number]. Not sure why that is, lil frustating though, feel like I kinda understood what was going on. I tried to push twice, and that didn't really work out for me either. I think it worked out the same as what I'm currently doing with the answer var.

console.log(highAndLow("1 2 3 4 5"),"5 1")
console.log(highAndLow("1 2 -3 4 5"),"5 -3")
console.log(highAndLow("1 9 3 4 -5"),"9 -5")