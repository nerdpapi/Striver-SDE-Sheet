
/**
 * Problem: 540. Single Element in a Sorted Array
 * Approach: Brute Force - Check Neighbors
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var singleNonDuplicate = function(nums) {
    const n = nums.length;

    if (n === 1) return nums[0];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            if (nums[i] !== nums[i + 1]) {
                return nums[i];
            }
        } else if (i === n - 1) {
            if (nums[i] !== nums[i - 1]) {
                return nums[i];
            }
        } else {
            if (
                nums[i] !== nums[i - 1] &&
                nums[i] !== nums[i + 1]
            ) {
                return nums[i];
            }
        }
    }
};
