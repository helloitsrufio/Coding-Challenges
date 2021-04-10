// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//P: Does it take in special chars? Does capitalization matter? Will I ever be given an empty string? Will I ever be given anything besides a string? NO REVERSE METHOD.
//R: Should return a reversed string.
//E: see console logs.
//P: Make a function that takes in a string
function reverseString(str){
    //   Split into array 
      return str.split('').sort((a,b)=>b-a).join('')
    //   Sort b-a
    //   Join and return
      }
      console.log(reverseString('I am a bear.'), '.raeb a ma I')
      console.log(reverseString('Unbreakable.'), 'elbakaerbnU')
      console.log(reverseString('How much wood'), 'doow hcum woH')

//This coding challenge was SO EXCITING to me. You know why? Because I FUCKING SOLVED IT. Can you believe it? I barely can, tbh. I've struggled with coding challenges for, well, ever. When I saw this one and saw that I couldn't use .reverse(), I just kinda went, "Oh no", you know? Then I thought it through and was like, prob should split, sort it in descending order, and join. And it probably won't work. AND THEN IT FUCKING WORKED! I am OVER THE MOON with this coding challenge! 
//You think you aren't progressing, but I feel like this challenge is proof that I am progressing. I'm a capable dev and I am LEARNING GODDAMNIT