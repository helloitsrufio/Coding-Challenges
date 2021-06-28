//Write a function checkForImpostorSyndrome(str) that returns true if str contains 'not read' or 'can't interview yet', otherwise it should return as false. 

//Use .includes(), which helps you look within a string to see if it has a certain value. Literally takes in the exact string or # you're looking for.  


// //Parameters
// Write a function that checks for impostor syndrome. Returns true if 'not ready' or 'can't interview yet'. Otherwise return false. Will get a full string. May not have punctuation at the end. Within string, will have one or both. Doesn't matter if there are spaces on the end of each. No special characters except for the ' in can't. Only takes in one parameter. May not return either string. No case sensitivity.

// //Results
//Should just get true or false.

// //Examples
// 'I can't interview yet, I'm waiting for them to call me back.' - true
// 'Cats and dogs' - false
// 'I'm not ready yet' - true

// //Pseudocode
//function will take in one parameter
function checkForImpostorSyndrome(str){
    //utilize ternary & return
    return str.includes("not ready" || "can't interview yet") ? true : false
    //not ready & can't interview yet will be conditions
    //true or false
    }
    
    checkForImpostorSyndrome("I'm not ready yet!")
    checkForImpostorSyndrome('cats and dogs')
    

//Teacher soln:
function checkForImpostorSyndrome(str){
    let lowerCaseStr = str.toLowerCase()
    //My interviewer told me that I wouldn't have any cases of this, so I didn't need to include this.
    return lowerCaseStr.includes("not ready") ||   lowerCaseStr.includes("can't interview yet")
}
//Interesting! He didn't use a ternary. I guess it may be somewhat inherent in .includes()?
//Felt really good about this one, mostly because I knew how to do it. But my interviewer said that I was very engaged and asked lots of questions, and she liked that. She said that maybe I should put my code on the same screen that my webcam is on so it looks like I'm looking at the interviewers all the time. 