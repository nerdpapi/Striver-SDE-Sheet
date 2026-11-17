/**
 * Problem: Longest Subarray with Sum K
 * Approach: Brute Force
 *
 * Generate every subarray and maintain its sum.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestSubarray = function(nums, k) {
    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;

        for (let j = i; j < nums.length; j++) {
            currentSum += nums[j];

            if (currentSum === k) {
                longest = Math.max(longest, j - i + 1);
            }
        }
    }

    return longest;
};