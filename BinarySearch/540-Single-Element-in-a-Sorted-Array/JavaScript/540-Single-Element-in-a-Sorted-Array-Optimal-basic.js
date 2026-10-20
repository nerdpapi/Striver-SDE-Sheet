
/**
 * Problem: 162. Find Peak Element
 * Approach: Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const n = nums.length;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // Check if mid is a peak
        if (
            (mid === 0 || nums[mid] > nums[mid - 1]) &&
            (mid === n - 1 || nums[mid] > nums[mid + 1])
        ) {
            return mid;
        }

        // Left neighbor is greater, so move left
        else if (mid > 0 && nums[mid - 1] > nums[mid]) {
            high = mid - 1;
        }

        // Otherwise, move right
        else {
            low = mid + 1;
        }
    }

    return -1;
};
