//Parameters: Will always be input into 'Hello, ___ how are you doing today?' That sentence will be a template literal I think. 
//<name> will always be an input. Will always be a string, never a number. 

//Results: Some name put into, 'Hello, ____ how are you doing today?'

//Examples: Ex. 'Hello, Ruth how are you doing today?' Ex. 'Hello, Naufal how are you doing today?'

//Pseudocode:
//Function that takes in one parameter(the name)
function greet(name){
    //Put name directly into a template literal and return
    return `Hello, ${name} how are you doing today?`
  }

//Modified into an arrow function to make it more succinct.
const greet = (name) => {return `Hello, ${name} how are you doing today?`}