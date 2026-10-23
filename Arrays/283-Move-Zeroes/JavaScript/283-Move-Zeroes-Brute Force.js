
/**
 * Problem: 283. Move Zeroes
 * Approach: Temporary Array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var moveZeroes = function(nums) {
    const n = nums.length;
    const temp = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            temp.push(nums[i]);
        }
    }

    const temp_sz = temp.length;

    for (let i = 0; i < temp_sz; i++) {
        nums[i] = temp[i];
    }

    for (let i = temp_sz; i < n; i++) {
        nums[i] = 0;
    }
};
