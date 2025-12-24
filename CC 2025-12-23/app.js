// Your Task:

// You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

//PARAM: Given an arr as the input. Content will be a str with formatting of HH:MM:SS. Given that it's an arr, there will be multiple strings. Each str = how much time it takes Santa to deliver exactly 1 present! Given the input arr, calculate if all the hrs <=24 hrs. Will always be given a str input in the arr, if it is exactly 24 hrs, Santa can still do it. Doesn't matter how many objects in arr! If you are given an empty arr, still true.
//RETURN: Boolean. Yes, or no, or ToF
//EXAMPLES:
function determineTime(durations) {
  //make an empty var?
  let totalSeconds = 0;
  //in the case that the arr is empty
  if (durations.length == 0) {
    return true;
  }
  //conv individual strs to a num and also seconds!
  for (let i = 0; i < durations.length; i++) {
    let individualNum = durations[i].split(":").map((n) => parseInt(n));
    totalSeconds += individualNum[0] * 60 * 60;
    totalSeconds += individualNum[1] * 60;
    totalSeconds += individualNum[2];
  }
  if (totalSeconds > 86400) {
    return false;
  }
  return true;
  //add str to empty var
  //cycle through all of them and add them all
  //if the no-longer-empty-var is >24 hrs (or 86400 seconds), return false
  //else return true!
}

console.log(determineTime([], true));
console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]), true);
console.log(determineTime(["12:00:00", "12:00:01"]), false);
