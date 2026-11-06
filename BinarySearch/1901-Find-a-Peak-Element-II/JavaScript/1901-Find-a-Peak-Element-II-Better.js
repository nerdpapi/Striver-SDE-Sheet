/*
Problem: Find a Peak Element II
Approach: Better - Binary Search on Row
Time Complexity: O(m * n)
Space Complexity: O(1)
*/

class Solution {
    findPeakGrid(mat) {
        const m = mat.length;
        const n = mat[0].length;

        let max_val = -Infinity;
        let row_idx = -1;
        let col_idx = -1;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] > max_val) {
                    max_val = mat[i][j];
                    row_idx = i;
                    col_idx = j;
                }
            }
        }

        return [row_idx, col_idx];
    }
}