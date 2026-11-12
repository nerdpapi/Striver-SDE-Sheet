
/**
 * Problem: 283. Move Zeroes
 * Approach: Two Pointers with Swapping
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var moveZeroes = function(nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
};
