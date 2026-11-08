/*
Problem: Median in a Row-Wise Sorted Matrix
Approach: Brute Force - Flatten and Sort
Time Complexity: O(m * n * log(m * n))
Space Complexity: O(m * n)
*/

class Solution {
    median(mat) {
        let m = mat.length;
        let n = mat[0].length;

        let flatArr = mat.flat().sort((a, b) => a - b);

        return flatArr[Math.floor((m * n) / 2)];
    }
}