//     Abbreviate a 2 word name.
//    Return a string. Initials should have a period in between them. 
//    Will only ever be given two words with a space in between. No space preservation. 
//    Any random name. Capital letters. 
   
function abbrevName(name){
   let modifiedName = name.toUpperCase()
   let splitName = modifiedName.split(' ')
   return `${splitName[0][0]}.${splitName[1][0]}`
   }

   //Improved version
   function abbrevName(name){
    let splitName = name.toUpperCase().split(' ')
    return `${splitName[0][0]}.${splitName[1][0]}`
    }