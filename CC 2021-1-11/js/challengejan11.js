//Please create a function that takes in two numbers. Print to the console the division of the these two numbers rounded down.
const n1 = parseInt(document.getElementById('n1').value);
const n2 = parseInt(document.getElementById('n2').value);

document.querySelector("#button").addEventListener('click', twoNumbers)

function twoNumbers(n1, n2){
    let answer = n1/n2;
    console.log(Math.floor(answer));
}
