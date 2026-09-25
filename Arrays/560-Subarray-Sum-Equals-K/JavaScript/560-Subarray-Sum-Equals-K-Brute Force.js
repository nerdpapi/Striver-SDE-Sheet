/**
 * Problem: 560. Subarray Sum Equals K
 * Approach: Brute Force
 *
 * Generate every subarray and maintain its running sum.
 * Count whenever the sum equals k.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let total = 0;

        for (let j = i; j < n; j++) {
            total += nums[j];

            if (total === k) {
                count++;
            }
        }
    }

    return count;
};