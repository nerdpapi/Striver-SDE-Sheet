/**
 * Problem: 75. Sort Colors
 * Approach: Better - Counting
 *
 * Count the number of 0s, 1s, and 2s, then overwrite the array
 * with the required number of each value.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void}
 */

var sortColors = function(nums) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // Count 0, 1 and 2
    for (const num of nums) {
        if (num === 0) {
            count0++;
        } else if (num === 1) {
            count1++;
        } else {
            count2++;
        }
    }

    // Fill 0s
    for (let i = 0; i < count0; i++) {
        nums[i] = 0;
    }

    // Fill 1s
    for (let i = count0; i < count0 + count1; i++) {
        nums[i] = 1;
    }

    // Fill 2s
    for (let i = count0 + count1; i < nums.length; i++) {
        nums[i] = 2;
    }
};