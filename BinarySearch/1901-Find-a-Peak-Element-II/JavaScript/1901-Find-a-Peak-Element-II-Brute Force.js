/*
Problem: Find a Peak Element II
Approach: Brute Force - Check all 4 directions for each element
Time Complexity: O(m * n * 4)
Space Complexity: O(1)
*/

class Solution {
    findPeakGrid(mat) {
        const m = mat.length;
        const n = mat[0].length;

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                let up = i > 0 ? mat[i - 1][j] : -1;
                let down = i + 1 < m ? mat[i + 1][j] : -1;
                let left = j > 0 ? mat[i][j - 1] : -1;
                let right = j + 1 < n ? mat[i][j + 1] : -1;

                if (
                    mat[i][j] > up &&
                    mat[i][j] > down &&
                    mat[i][j] > left &&
                    mat[i][j] > right
                ) {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }
}