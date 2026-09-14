/**
 * Problem: Count Inversions
 * Approach: Brute Force
 *
 * Check every pair (i, j) where i < j.
 * If arr[i] > arr[j], the pair is an inversion.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    inversionCount(arr) {
        const n = arr.length;
        let count = 0;

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                if (arr[i] > arr[j]) {
                    count++;
                }
            }
        }

        return count;
    }
}