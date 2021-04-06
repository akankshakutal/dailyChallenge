function diagonalDifference(arr) {
    let length = arr.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i === j) diagonal1 += arr[i][j];
            if (i + j === length - 1) diagonal2 += arr[i][j];
        }
    }
    return Math.abs(diagonal1 - diagonal2);
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))