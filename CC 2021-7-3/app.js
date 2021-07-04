//Team coding with classmates

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.
//use map length and filter
// Example
//  array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
//  array2 = ['abc', 'cde', 'uap']
function countArray(array1, array2){
  let newArr = array2.map( l => array1.filter(x => x=== l).length)
  return newArr
}

countArray(['abc', 'abc','xyz','abcd','cde'],['abc', 'cde', 'uap'])

Test.assertDeepEquals(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
Test.assertDeepEquals(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
Test.assertDeepEquals(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);



//Yooooo can't believe we got that! This truly was a group effort problem. There were 3 of us and each of us contributed to the problem. Ahmed did most of it, Kupah did the mapping part, and I added .length which is ultimately what got it to work. CAN'T EVEN BELIEVE IT FAM. SO rewarding. 
//We are returning a new array, and we do it using the two parameters given. We apply map to array.2 given l and filtering array1, where we filter x and see if it is equal to the previous l. This returns the contents, and the .length gives the #.
//One of the first times in coding where I truly felt equal and like it was teamwork. Equal teamwork. Awesome. 

//Teacher's soln:
const findNumofAppears = (arr1,arr2) => 
arr2.map(x=> arr1.filter(y => y === x).length)
//IT'S ALMOST EXACTLY LIKE OUR ANSWER OMG


// FILTER:
// Takes in element, index, and arr. 
// Enables you to take the val you passed in and lets you run a test case/condition. It will return whatever passes that condition into a new array. 
// Helps you remove stuff from an array.

// map, filter, length