/**
 * Problem: 53. Maximum Subarray
 * Approach: Brute Force
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let maxi = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let total = 0;

        for (let j = i; j < nums.length; j++) {
            total += nums[j];
            maxi = Math.max(maxi, total);
        }
    }

    return maxi;
};