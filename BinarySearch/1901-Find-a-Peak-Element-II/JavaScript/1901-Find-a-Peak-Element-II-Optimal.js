/*
Problem: Find a Peak Element II
Approach: Binary Search on Columns
Time Complexity: O(m * log n)
Space Complexity: O(1)
*/

class Solution {
    findPeakGrid(mat) {
        const m = mat.length;
        const n = mat[0].length;

        const findRowIndex = (mat, col) => {
            let maxVal = -Infinity;
            let index = -1;

            for (let i = 0; i < m; i++) {
                if (mat[i][col] > maxVal) {
                    maxVal = mat[i][col];
                    index = i;
                }
            }

            return index;
        };

        let low = 0;
        let high = n - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            let row = findRowIndex(mat, mid);

            let left = mid - 1 >= 0 ? mat[row][mid - 1] : -1;
            let right = mid + 1 < n ? mat[row][mid + 1] : -1;

            if (left < mat[row][mid] && mat[row][mid] > right) {
                return [row, mid];
            } else if (mat[row][mid] < left) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return [-1, -1];
    }
}