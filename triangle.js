function staircase(n) {
    const char = "#"
    const space = " "
    const array = [...Array(n + 1).keys()]
    array.shift()
    array
        .map(ele => char.repeat(ele))
        .map(ele =>
            ele.concat(space.repeat(n - ele.length))
                .split("").reverse().join("")
        )
        .forEach(ele => console.log(ele))
}

staircase(5)