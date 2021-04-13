function nonDivisibleSubset(k, s) {
    const values = new Array(k).fill(0);
    let result = 0;

    s.reduce((acc, ele) => {
        values[ele % k] += 1;
        return acc;
    }, []);

    const array = Array.from({length: (k + 1) / 2 - 1}, (value, index) => index + 1);
    for (let i of array) result += Math.max(values[i], values[k - i]);
    !(k % 2) && !!values[k / 2] && (result += 1);
    values[0] && (result += 1);
    return result;
}

console.log(nonDivisibleSubset(4,[19,10,12,1024,24,22]))
