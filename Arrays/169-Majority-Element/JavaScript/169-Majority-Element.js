/**
 * Problem: 169. Majority Element
 * Approach: Brute Force
 *
 * For every element, count its frequency by scanning the
 * entire array.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        let count = 0;

        for (let j = 0; j < n; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        if (count > n / 2) {
            return nums[i];
        }
    }

    return -1;
};