// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//P: If input is empty/null, return empty arr. We want the count of positive numbers, and the sum of negative nums. 0 is neither + or -.
//R: Array with: [Count of + nums and sum of - nums]
//E:
//P: Make a function that takes in an arr


//first attempt
function countPositiveSumNegative(arr){
    let count = 0
    let sum
    //is it positive or negative?
    
    arr.map(e=>{
        if(e>0){
            count +1
        }else if(e<0){
            sum += e
        }
    }
        )
        return [count,sum]
    //if it's positive, count how many positive numbers there are.
    //if it's negative, sum the negative numbers together.
    //if it's empty or null, return empty arr
    //put them into an arr
    //return that arr
}

//Idk what is going on here, it is not doing literally anything we tell it too woof. I feel like this should work
console.log(countPositiveSumNegative([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10, -65])
console.log(countPositiveSumNegative([1, 7, 8, 9, -1, -12, -94 -15]),[4, -122])
console.log(countPositiveSumNegative([]),[])

//second attempt
function countPositiveSumNegative(arr){
    let count = 0
    let sum
    for(i=0;i<arr.length;i++){
        if(arr[i] > 0){
            count + 1
        }else if(arr[i] < 0){
            sum += arr[i]
        }
    }
    return [count,sum]
}

//For some reason I also thought that this would end up working out. We are grabbing each element...I think? Or is that just their index #? Anyway, didn't work :/


//third attempt
function countPositiveSumNegative(arr){
    if(arr == [] || arr == null ){
        return []
    }else if(arr.forEach(e=>{
        if(e ==0){
        return [empty]
    }})

    const empty = arr => arr.length = 0
    let positiveArr = arr.filter(element => 
        element>0)
    let count = positiveArr.length
    let negativeArr = arr.filter(element=>element<0)
    let sum = negativeArr.reduce((acc,c)=>acc+c,0)
    
    console.log([count,sum])
    return [count,sum]

}
//The problem is if we have [0,0], should return [], but it DOESN'T and I DON'T KNOW HOW TO FIX IT UGH. On the bright side, this is mostly working! Brilliant. 