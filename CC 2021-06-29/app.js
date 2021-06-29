//TEAM CODING

//Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
//Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

//Team attempt:
function sumHighLow(arr) {
    let newArr = arr
     arr.sort((a,b) => {return a-b})
    return newArr.pop()
  }
  console.log(sumHighLow([ 6, 2, 1, 8, 10 ]), '16')

  //Teacher answer
  function sum(arr){
      arr=arr.sort((a,b) => a-b)
      arr.pop()
      arr.shift()
      return arr.reduce((a,c)=>a+c)
  }
  console.log(sum([ 6, 2, 1, 8, 10 ]))

  //Teacher min-max answer
  const sum = arr => arr.reduce((a,c)=>a+c) - Math.max(...arr) - Math.min(...arr)
  console.log(sum([ 6, 2, 1, 8, 10 ]))
  //Idk what ...arr does. Apparently it grabs the entire array without having to write it all out. But isn't that what a variable is for? Reduce doesn't really make sense to me either.
  //Didn't like my group. Had a commandeering dude who didn't ask the rest of us to contribute. He just went for it and that frustrated me. This is supposed to be TEAM coding. And the other team member didn't contribute anything, not that there was the opportunity to. 