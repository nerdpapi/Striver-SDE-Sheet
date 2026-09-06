/**
 * Problem: 53. Maximum Subarray
 * Approach: Better - Prefix Sum
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    const n = nums.length;

    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let maxi = -Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            const total = prefix[j + 1] - prefix[i];
            maxi = Math.max(maxi, total);
        }
    }

    return maxi;
};