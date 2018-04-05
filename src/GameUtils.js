export function setColsMaxs(columns, rows) {
    var colsMaxs = []
    for (let i = 1; i <= columns; i++) {
        colsMaxs.push((rows * i) - 1);
    }
    return colsMaxs;
}

export function calculateWinner(circles, rows, columns) {
    const stepPositive = rows - 1;
    const stepNegative = rows + 1;
    const stepVertical = 1;
    const stepOrizontal = rows;
    for (let z = 0; z < rows * columns; z++) {
        if (((isValidStart(z, 0, stepVertical, rows, columns) && isConsecutiveFour(circles, z, stepVertical))
            || isConsecutiveFour(circles, z, stepOrizontal)
            || (isValidStart(z, 3, stepNegative, rows, columns) && isConsecutiveFour(circles, z, stepNegative))
            || (isValidStart(z, 3, stepPositive, rows, columns) && isConsecutiveFour(circles, z, stepPositive))
        ) && circles[z] != null) {
            return true;
        }
    }
    return false;
}

export function isConsecutiveFour(circles, index, step) {
    return circles[index] === circles[index + 1 * step]
        && circles[index + 2 * step] === circles[index + 3 * step]
        && circles[index] === circles[index + 3 * step]
}

export function isValidStart(index, offset, step, rows, columns) {
    return (Math.floor((index + 3 * step) / rows) === Math.floor(index / rows) + offset)
        && index + 3 * step <= rows * columns - 1;
}