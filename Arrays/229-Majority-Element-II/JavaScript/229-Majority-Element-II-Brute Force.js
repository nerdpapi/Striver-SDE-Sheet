/**
 * Problem: 229. Majority Element II
 * Approach: Brute Force
 *
 * For every unique element, count its frequency by scanning
 * the entire array.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1) excluding output
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        if (!result.includes(nums[i])) {
            let count = 0;

            for (let j = 0; j < n; j++) {
                if (nums[i] === nums[j]) {
                    count++;
                }
            }

            if (count > n / 3) {
                result.push(nums[i]);
            }
        }

        if (result.length === 2) {
            break;
        }
    }

    return result;
};