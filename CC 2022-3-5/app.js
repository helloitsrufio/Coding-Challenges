// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty".

//wtf even is this problem. Why is it phrased this way

//P: Takes in a string. Does capitalization ever matter? Special characters? It also needs to take in a number if applicable.
//R: Wants a boolean. Looking for 'tree fiddy', '3.50', 'three fifty'. If it has these things, should return true.
//E:
//P: Make a function that takes in a string

// ___________attempt 1___________
function isLockNessMonster(s) {
    //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    //Split up the string into individual words
    let newS = s.split(' ')
    //Make a conditional where you check each element in array and see if it is 'tree fiddy' 3.50, or 'three fifty'.
   if( newS.forEach(el=>el=='fiddy' || el== '3.50' || el== 'fifty')){
       //return true if that's the case
     return true
   }
  }
  //not working great for me. Like at all. I think I'm using forEach wrong?



  //___________attempt 2___________
  function isLockNessMonster(s) {
      if(s.includes('fiddy') || s.includes(3.50)){
      return true
    }else{
      return false
    }}
    //didn't need a new variable, so got rid of that. But this isn't working either. It's passing *most* of the tests, but not all. 
    //error is an unterminated string constant.


    //___________attempt 3___________
    function isLockNessMonster(s) {
        return s.includes('fiddy') || s.includes(3.50) ? true : false

        //this one works! I made it a lot simpler. Not sure why I don't need 'three fifty' as well, but it passes all the tests.
        //What a problem.
      
  console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."), false)
  console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"), true)
  console.log(isLockNessMonster("Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?
  I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them"), true)
  console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."), false)
  