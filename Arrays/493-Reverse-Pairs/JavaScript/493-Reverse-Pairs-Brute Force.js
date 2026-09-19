/**
 * Problem: 493. Reverse Pairs
 * Approach: Brute Force
 *
 * Check every pair (i, j) where i < j.
 * A reverse pair exists when:
 *     nums[i] > 2 * nums[j]
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] > 2 * nums[j]) {
                count++;
            }
        }
    }

    return count;
};