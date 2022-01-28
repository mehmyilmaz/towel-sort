
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    } else if (matrix.length === 0) {
        return [];
    } else {
        for (i = 0; i < matrix.length; i++) {
            if ([i] % 2 !== 0) {
                matrix[i].reverse();
            }
        }
    }
    return matrix.join(',').split(',').map(el => +el);
}
