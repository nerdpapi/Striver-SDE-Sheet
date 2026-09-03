var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {

                // Mark row
                for (let col = 0; col < n; col++) {
                    if (matrix[i][col] !== 0) {
                        matrix[i][col] = -1;
                    }
                }

                // Mark column
                for (let row = 0; row < m; row++) {
                    if (matrix[row][j] !== 0) {
                        matrix[row][j] = -1;
                    }
                }
            }
        }
    }

    // Convert markers to 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }
};