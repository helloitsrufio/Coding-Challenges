// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//Will we ever be given an empty param or string or anything? 
//Should return the result of the singly occuring numbers.
//


//----first attempt----
//Make a function that takes in a param (arr)
function sumOfSingleNums(arr){
    //filter out any numbers that occur twice
    arr.filter(e=>e[0] !== e[1])
    //sum and return singly occurring nums
    return arr.map(e=>e+e)
}

console.log(sumOfSingleNums([1,1,3,6,4,4,9]),18)
console.log(sumOfSingleNums([1,1,2,3,2,3]),0)
console.log(sumOfSingleNums([4,90,3,2,2]),97)

//trying to figure out how to get one element vs the next in the arr. This is not giving me an err or anything. It is, however, giving me each element in the arr, just *2. Yiiiikes

//----second attempt----
function sumOfSingleNums(arr){
    let newArr = []
    for(i=0;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            newArr = [arr[i]]
        } 
    }
    return newArr.map(e=>e+e)
}
//Returns each element unchanged and in its own separate arr. Woof. I tried to do a for loop so we could grab each individual element and while that's working for me, that's obviously NOT working for me. I got rid of the .filter() method and I'm thinking that that was not the right choice.


//----working through the answer----
function sumOfSingleNums(arr){
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a,c)=>a+c,0)
  }
  //Ok, so they originally used .filter(), which makes sense. Given a num, you check the index of that num within the arr. And then you say that if that num's index is the same of the last index of num, then reduce. 
  //Not sure why I didn't remember reduce. I was trying to add all the elems together, and that's exactly what .reduce() does. 
  //I think the reason why I didn't get this is because I didn't remember either indexOf() or lastIndexOf(). To be completely honest, I'm not sure why this works. Because wouldn't it in theory start with the first and the last number? Does .lastIndexOf() check the whole arr? 
  //So .lastIndexOf() returns the last occurence of a substring within a string. So it's checking the whole arr for a similar number.
  //But wouldn't this grab the repeating numbers? I feel like it would...? But it doesn't.