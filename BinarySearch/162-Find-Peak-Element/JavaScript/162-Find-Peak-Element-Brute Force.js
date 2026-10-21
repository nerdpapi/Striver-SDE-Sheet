
/**
 * Problem: 162. Find Peak Element
 * Approach: Brute Force — Check Neighbors
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var findPeakElement = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (
            (i === 0 || nums[i] > nums[i - 1]) &&
            (i === n - 1 || nums[i] > nums[i + 1])
        ) {
            return i;
        }
    }

    return -1;
};
