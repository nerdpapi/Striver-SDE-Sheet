/**
 * Problem: Largest Subarray with 0 Sum
 * Approach: Brute Force
 *
 * Generate every subarray and maintain its sum.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const n = arr.length;
    let longest = 0;

    for (let i = 0; i < n; i++) {
        let total = 0;

        for (let j = i; j < n; j++) {
            total += arr[j];

            if (total === 0) {
                longest = Math.max(longest, j - i + 1);
            }
        }
    }

    return longest;
};