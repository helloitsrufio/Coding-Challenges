//Did in class with a group. Practiced PREP and map. Also split, reverse, join, which we did right before. I liked this group a lot more than the first. They knew more than I did, much like the first, but didn't make me feel stupid. It's important to notice how you're treating people and how things may come across, even if you don't mean them meanly. 


// Please create a function that determines whether or not a word is a palindrome. You must make each letter lower case before doing the comparison, but we now exist in a world where .toLowerCase() only works on an indiviual letter...

//P: Do you want every letter to be lower case? - No; Can it take in #s? Yes; Are there any other special characters that will show up? Yes; 

//R: Return a boolean or a string based on a boolean. 

//E: 'Cat' - false; 'Bob' - true; 'rAdaR' - truel

//P: Make a function that takes in a string

      //Split string into array

      //Convert every element in array to lower case using map

      //Reverse array

      //Join array 

      //Return original string compared to reverse string

      function isPalindrome(str) {
        const lowered = str.split('').map(letter => letter.toLowerCase()).join('')
        const reversed = str.split('').map(letter => letter.toLowerCase()).reverse().join('')
        return reversed === lowered 
      }

      console.log(isPalindrome('Cat'))
      console.log(isPalindrome('Bob'))
      console.log(isPalindrome('rAdaR'))
      console.log(isPalindrome('55055'))
      console.log(isPalindrome('%6116%'))
      console.log("$".toLowerCase())

      //Also interesting thing I learned today: toLowerCase() doesn't return an error if numbers or special characters run through it. I feel like that is a valuable thing to know.