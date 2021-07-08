// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
    string = string.replace(/[a-z][A-Z]/g,'$1 $2')
  string = string.replace(/[A-Z][A-Z]/g,'$1 $2')
  //this line isn't necessary since it's camel Casing.
  return string;
}

//getting 'came$1 $2asing' instead of 'camel Casing'.
//I tried this regex expression based off of one I found online and followed it basically exactly. For them, apparently it worked. For me, it did not. The first line in the function is supposed to replace all capital letters in the case that there is a lower case character followed by an uppercase character, and the second line for when two consecutive capital letters occur.  
//I've tried to look up the reasoning behind '$1 $2' but couldn't really find any. Not sure why it is recommended. I also tried just a ' ' but that didn't work either. It just skipped whatever letter it was. Kind of frustrating, but I am understanding regex better. I've never tried to use or understand it before. 

//UNSOLVED


//apparently this link explains $1 - $9: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n

// $n: Where n is a positive integer less than 100, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed. If a group n is not present (e.g., if group is 3), it will be replaced as a literal (e.g., $3).
//investigate $&