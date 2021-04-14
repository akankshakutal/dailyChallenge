function miniMaxSum(arr) {
    const arrMinor = arr.slice().sort((a, b) => {return a - b})
    const arrMajor = arr.slice().sort((a, b) => {return b - a})
    arrMinor.pop()
    arrMajor.pop()

    const result1 = arrMinor.reduce((acc, b)  => {return acc + b;})
    const result2 = arrMajor.reduce((acc, b)  => {return acc + b;})

    console.log(`${result1} ${result2}`)
}

miniMaxSum([1,3,5,7,9])