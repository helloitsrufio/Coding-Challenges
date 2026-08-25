// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

// Names given are always valid strings.

// PARAMETERS: Given a string that will always be letters, but it doesn't matter that much because basically we're just checking if it starts with an r or not. And if it does start with an R, regardless of case, we are going to return another str
//RETURN: return the given name plus a string that says whether or not banjo is played
//EXAMPLES:

console.log(banjoPlayer("rufio"), "rufio plays banjo");
console.log(banjoPlayer(""), " does not play banjo");
console.log(
  banjoPlayer("Matthiasrichter"),
  "Matthiasrichter does not play banjo",
);

//PSEUDOCODE:
//make a function that takes in a string
// make the whole str lower case
// we are going to chop up that str
// then we are going to look at the first letter of that string
// if the first letter of that string is an 'r', then return the original string + 'plays banjo'
// for everything else, return the original string + ' does not play banjo'
function banjoPlayer(name) {
  let newName = name.toLowerCase().split("");
  if (newName[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

function banjoPlayer(name) {
  if (name[0] === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}
