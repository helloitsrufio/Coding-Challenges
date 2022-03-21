// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z


// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  --> "Jedrzej Bladzinski"

//P:Will I ever be given a string without a diacritic? Will I ever be given an empty string? Will I ever be given anything other an a string? What to do about special characters? 
//R: Return a string that has absolutely no diacritics
//E:
//P: Make a function that takes in a string
function unPolished(str){
    //chop that string bb into individual character
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let polishVowels = { "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n", "ó": "o", "ś": "s", "ź": "z", "ż": "z", }
    //go thru array and be like, yo are you a diacritical boi?
str.split('').map(e=>e == polishVowels{e} ? e = vowels[e-1] : e)
    //if it be a diacritical boi, then turn it to the undiacritical boi

    //if not, jus return :)

    //smack that bb all together and RETURN
}
//yo this doesn't work, mostly because I'm not even returning it. But also the ternary is all janky and yeah.

console.log(unPolished('Jędrzej Błądziński'),"Jedrzej Bladzinski")
console.log(unPolished('Rufio is the BAEST'),'Rufio is the BAEST')
console.log(unPolished(''),'')