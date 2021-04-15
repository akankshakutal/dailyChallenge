function queensAttack(n, k, r_q, c_q, obstacles) {
    const getDiagonal = (c_o, c_q, r_o, r_q) => Math.abs(c_o - c_q) === Math.abs(r_o - r_q);

    const queenMoves = {
        up: (r_q, c_q, r_o, c_o, up) => r_o === r_q && c_o > c_q ? Math.min(up, c_o - c_q - 1) : up,
        down: (r_q, c_q, r_o, c_o, down) => r_o === r_q && c_o <= c_q ? Math.min(down, c_q - c_o - 1) : down,
        right: (r_q, c_q, r_o, c_o, right) => c_o === c_q && r_o > r_q ? Math.min(right, r_o - r_q - 1) : right,
        left: (r_q, c_q, r_o, c_o, left) => c_o === c_q && r_o <= r_q ? Math.min(left, r_q - r_o - 1) : left,
        up_right: (r_q, c_q, r_o, c_o, up_right) =>
            (getDiagonal(c_o, c_q, r_o, r_q) && c_o > c_q && r_o > r_q) ? Math.min(up_right, c_o - c_q - 1) : up_right,
        down_right: (r_q, c_q, r_o, c_o, down_right) =>
            (getDiagonal(c_o, c_q, r_o, r_q) && c_o > c_q && r_o < r_q) ? Math.min(down_right, c_o - c_q - 1) : down_right,
        up_left: (r_q, c_q, r_o, c_o, up_left) =>
            (getDiagonal(c_o, c_q, r_o, r_q) && c_o < c_q && r_o > r_q) ? Math.min(up_left, c_q - c_o - 1) : up_left,
        down_left: (r_q, c_q, r_o, c_o, down_left) =>
            (getDiagonal(c_o, c_q, r_o, r_q) && c_o < c_q && r_o < r_q) ? Math.min(down_left, c_q - c_o - 1) : down_left
    }

    let up = n - r_q;
    let right = n - c_q;
    let down = r_q - 1;
    let left = c_q - 1;
    let up_left = Math.min(up, left);
    let up_right = n - Math.max(c_q, r_q);
    let down_left = Math.min(c_q, r_q) - 1;
    let down_right = Math.min(r_q - 1, n - c_q);

    let numbers = Array.from({length: k}, (value, index) => index);

    for (let i of numbers) {
        let {0: r_o, 1: c_o} = obstacles[i];
        up = queenMoves.up(r_q, c_q, r_o, c_o, up)
        down = queenMoves.down(r_q, c_q, r_o, c_o, down)
        right = queenMoves.right(r_q, c_q, r_o, c_o, right)
        left = queenMoves.left(r_q, c_q, r_o, c_o, left)
        up_right = queenMoves.up_right(r_q, c_q, r_o, c_o, up_right)
        down_right = queenMoves.down_right(r_q, c_q, r_o, c_o, down_right)
        up_left = queenMoves.up_left(r_q, c_q, r_o, c_o, up_left)
        down_left = queenMoves.down_left(r_q, c_q, r_o, c_o, down_left)
    }

    return right + left + up + down + down_left + up_left + down_right + up_right;
}

console.log(queensAttack(4, 0, 4, 4))