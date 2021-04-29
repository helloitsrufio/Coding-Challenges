
  //Parameters: Likely it only takes in booleans. Only valid inputs will be given so no need to worry about error message.
           //Will turn any boolean into a string. 
  //Results: "true" or "false"
  //Examples: If true ? "true" : "false"
  //Pseudocode below:
  
  
  //Take in a function with one parameter. 
  function booleanToString(b){
    //Use toString method
   return b.toString()
  }

  //Modified answer into arrow function to be more succinct
  booleanToString = (b) =>{ return b.toString()}