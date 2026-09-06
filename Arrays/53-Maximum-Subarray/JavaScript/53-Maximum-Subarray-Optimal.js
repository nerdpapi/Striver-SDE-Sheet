/**
 * Problem: 53. Maximum Subarray
 * Approach: Optimal - Kadane's Algorithm
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let current = nums[0];
    let maxi = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(current + nums[i], nums[i]);
        maxi = Math.max(maxi, current);
    }

    return maxi;
};