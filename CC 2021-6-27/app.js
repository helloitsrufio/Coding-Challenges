// Create a CamelCase Method where all words must have their first letter capitalized without spaces.

// For instance:
// "hello case" => "HelloCase"
// "camel case word" => "CamelCaseWord"

/*
P: take in a string
  --will string be empty?
  --could it have special characters?
  --would we need to convert to all lowercase beyond first letter
R: return capitalized CamelCase
E: "hello case" => "HelloCase"
  --"camel case word" => "CamelCaseWord"
  --"we confused" => 'WeConfused'
P: write a function that takes in a string
    use split method to conver it to an array
      map the array and use the bracket notation to capitalize the first letter of each element in the array
        
        - map(el => el[0].toUpperCase().concat() + el.slice(1).toLowerCase())

      // join () (.toString())

 */

function camelCase(str){
    let newStr =  str.split(' ').map(el => el[0].toUpperCase() + el.slice(1).toLowerCase())
    return newStr.join('')
  }
  console.log(camelCase('hello kitty'), "HelloKitty")
  console.log(camelCase("what's up doggy"), "What'sUpDoggy")
  console.log(camelCase('we should sync our periods now'), "WeShouldSyncOurPeriodsNow")

  //We worked through this as a group even though it was supposed to be interview-style, which I guess is ok. It's not interview practice, but it was good group work practice. I kind of freaked out when I saw .map() because my gut reaction is ???? even though I relearned its function the other day. I see how it works, though. The part I was most confused about was the el.slice(1).toLowerCase() and why we needed that. But when I returned the line with out it, in the case of the first test case, it just came back with HK. So it makes sense to me now as to why we need that. 
  //Overall positive experience.

  //Teacher soln
  function camelCase(str){
    return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('')
  }
  //I added the new variable in my examples because it was throwing a fit at .toUpperCase(), but it looks like that was NOT necessary. Also it looks like the .toLowerCase() is also not necessary.