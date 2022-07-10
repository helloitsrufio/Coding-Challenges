function darkFactorial (n: number): number {
    // make an empty arr
    let sum: number = 1
  //make a for loop where we go up to whatever number n is
  for(let i=1;i<=n;i++){
    sum *= i
  }
  return sum
}