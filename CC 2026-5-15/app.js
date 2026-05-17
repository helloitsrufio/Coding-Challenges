// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

//PARAMETERS:
//Each dragon takes 2 bullets to be defeated. He will have n number of bullets and fight d number of dragons. We want a boolean given these integers. So we will be given 2 parameters.
//RETURN: Should return a boolean value
//EXAMPLES:
console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(1500, 751), true);
//PSEUDOCODE:
//add 2 params into my function, n and d
// given 1 dragon, it is 2 bullets
// return true if we have 2 bullets to min of 1 dragon
//return false otherwise

function hero(n, d) {
  // determine how many bullets you need per dragon
  const bulletsNeeded = d * 2;
  if (bulletsNeeded <= n) {
    return true;
  }
  return false;
  //determine how many bullets you actually have
  //if num of bullets is <= num of bullets needed, return true
}
//This is Babyfio's solution from like 2024 or something. It doesn't work.
// function hero(bullets, dragons){
// if(bullets % 2 === 0 && bullets/dragons == true){
//   return true
// }else{
//   return false
// }
// }

//BUUUUUUUT we fixed it and made it work :)
function hero(bullets, dragons) {
  return bullets / dragons >= 2;
}
//it's a heckin one-liner wtf
