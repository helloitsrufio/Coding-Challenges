function revArr(num: number): number[]{
    let arr = String(num).split('').reverse()
    return arr.map(n=>Number(n))
}