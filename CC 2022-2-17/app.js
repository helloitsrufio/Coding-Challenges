// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//P: No arrays will be empty. cool. Doesn't matter if they are special character or not since they may be removed, etc. If we change the array, will it mess up indices? Nah? nah probs
//R: Return an array with every other element starting with no. 1. That means that it will be all odd numbers
//E: if given [1,3,'fish', 'fishsticks',3] => [1, 'fish', 3]
//   if given [9, 9, 99, 999, 3] => [9, 99, 3]
//   if given ['rufio', 'is', 'the', 'best', 'yup] => ['rufio', 'the', 'yup']
//P: Make a function that takes in an array
    function everyOther(arr){
        let newArr = []
        //make a for loop where I can grab index number
        for(i=0; i<arr.length; i++){
             if(i % 2 == 0){
                newArr.push(arr[i])
             }
        }
        // if index number is odd, pop that shit off
        //also what do we do about 0 => it is even apparently #scam
        //return new array
        return newArr
    }

    everyOther([1,3,'fish', 'fishsticks',3]) //[1, 'fish', 3]
    everyOther([9, 9, 99, 999, 3])//[9, 99, 3]
    everyOther(['rufio', 'is', 'the', 'best', 'yup']) //['rufio', 'the', 'yup']




    arr.filter((item, index) => {return index%2 ===0});