//Description:

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//Can you help her?

//Original:
function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
  }

//Solution:

function greet(name){
    if(name === "Johnny"){
        return "Hello, my love!";
    }else{
        return "Hello, " + name + "!";
    }
  }

//This is my original solution. She had the return before the condition and the function is over once the return is run. So I reordered it and made it if-else, which worked quite well. 

//Then I had to get and include the original, so I had to do the whole thing over again. I decided to try a ternary. This is the format I got from the internet (I don't use ternaries too much):

//condition ? expression1 : expression2

//I decided to apply this to my previous solution. It didn't work the first couple of times, which I thought was because of lack of parentheses for (name === 'Johnny'), and then decided maybe it had an issue with the second condition. As a consequence I stuck it into a template literal. It still didn't work, though. I was getting an error regarding the ? itself, so I figured it must be something at the beginning since it wasn't recognizing it as a ternary. So I put in 'return' before and it worked! I need to remember to return the actual result. 

  function greet(name){
    return (name === "Johnny") ? "Hello, my love!" : `${"Hello, " + name + "!"}`
  }

