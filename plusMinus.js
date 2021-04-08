function plusMinus(arr) {
    const length = arr.length
    let positiveNumbers = 0
    let negativeNumbers = 0
    let zero = 0
    arr.forEach(ele => {
        if (ele < 0) negativeNumbers++
        if (ele === 0) zero++
        if (ele > 0) positiveNumbers++
    })
    console.log((positiveNumbers / length).toFixed(6))
    console.log((negativeNumbers / length).toFixed(6))
    console.log((zero / length).toFixed(6))
}

plusMinus([1, 1, 0, -1, -1])