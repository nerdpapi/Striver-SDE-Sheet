
/**
 * Problem: 283. Move Zeroes
 * Approach: Temporary Array
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var moveZeroes = function(nums) {
    const n = nums.length;
    let temp = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            temp.push(nums[i]);
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            temp.push(nums[i]);
        }
    }
    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
};
