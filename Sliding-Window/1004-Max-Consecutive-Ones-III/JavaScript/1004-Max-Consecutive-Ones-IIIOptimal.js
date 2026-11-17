/**
 * Problem: Longest Subarray with Sum K
 * Approach: Optimal - Sliding Window
 *
 * Works when all elements are non-negative.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestSubarray = function(nums, k) {
    let left = 0;
    let currSum = 0;
    let length = 0;

    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];

        while (currSum > k && left <= right) {
            currSum -= nums[left];
            left++;
        }

        if (currSum === k) {
            length = Math.max(
                length,
                right - left + 1
            );
        }
    }

    return length;
};