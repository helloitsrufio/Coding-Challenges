// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

//Classmate soln:
function truncate(str, maxlength) {
    if (str.length <= maxlength){
      return str
    } else {
      return str.slice(0, maxlength-1) + '...'
    }
  }

//Teacher soln:
function truncate(str, maxLength){
    return str.length > maxLength ? str.slice(0, maxLength-1) + '...' : str
    //Index starts at 0, so maxLength -1 will give an accurate index #. 

}

//One is more elegant than another, but obviously both work, so that's good. I think I would have created the first, but hopefully my mind can just gravitate to the dryer code as I practice.