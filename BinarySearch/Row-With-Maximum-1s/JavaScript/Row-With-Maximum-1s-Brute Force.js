/*
Problem: Row with Maximum 1s
Approach: Brute Force - Sum each row
Time Complexity: O(m * n)
Space Complexity: O(1)
*/

class Solution {
    rowAndMaximumOnes(mat) {
        const m = mat.length;
        const n = mat[0].length;

        let count_max = 0;
        let idx = 0;

        for (let i = 0; i < m; i++) {
            let count_one = mat[i].reduce((sum, value) => sum + value, 0);

            if (count_one > count_max) {
                count_max = count_one;
                idx = i;
            }
        }

        return [idx, count_max];
    }
}