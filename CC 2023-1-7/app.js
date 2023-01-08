// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

//P: We will be given an array of names. We want to return a string that says who likes the item. If there is only one name, it will say "name likes this". If there are two names, it will say "name and name like this". If there are three names, it will say "name, name and name like this". If there are four or more names, it will say "name, name and (number of names - 2) others like this".
//R: Will return a string that says who likes the item and how many people like it (if more than 4)
//E:
console.log(likes([]), "no one likes this");
console.log(likes(["Peter"]), "Peter likes this");
console.log(
  likes(["Alex", "Jacob", "Mark", "Max"]),
  "Alex, Jacob and 2 others like this"
);
//P: Make a function that takes in an arr
function likes(arr) {
  //take length of arr
  let numOfElems = arr.length;
  //if arr is empty, return 'no one likes this'
  if (numOfElems <= 0) {
    return "no one likes this!!!!!!!!😤";
  } else if (numOfElems == 1) {
    return `${arr[0]} likes this 😀`;
  } else if (numOfElems == 2) {
    return `${arr[0]} and ${arr[1]} like this 😀`;
    // if arr is more than 4, then return first two elems in the arr + remainder # of elements in arr + 'others like this'
    // regular is just returning elements in arr + 'like this' and commas too, prolly
  } else if (numOfElems == 3) {
    return `${arr[0]}, ${arr[1]}, and ${arr[2]} likes this 😀`;
  } else {
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }
}