//Please create a function that takes in a number and a word. If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!



document.querySelector('#button').addEventListener('click', multiplyNumberAndWord)
//run function
function multiplyNumberAndWord(str, num){
//define two inputs & convert word to length
    const str = document.querySelector('#word').value.length;
    const num = document.querySelector('#number').value;
//multiply word length times number input
 answer = str * num;
 //alert winner if more than 100
    if(answer > 100){
        alert("WINNER!");
    }else{
        alert("Sucks bro.")
    }
}


////You could do Number(input) or use .length after it to convert it to a number
//document.querySelector('#button').addEventListener('click', run)
//
////run function
//function run(){
////define two inputs & convert word to length
//  const num = document.querySelector('#number').value
//  const word = document.querySelector('#word').value.length
//
////multiply word length times number input
//  let result = num * word
//
////alert winner if more than 100
//  if (result>100){
//  alert("WINNER!")
//  }else{
//    alert("LOSER!")
//  }
//}

//function challengeTwo (word, number) {
//  isWinner = word.length * number
//  console.log(isWinner)
//  if (isWinner > 100) {
//    alert("WINNER!")
//  } else {
//    alert("Sorry :frowning: Please try again ")
//  }
//}
