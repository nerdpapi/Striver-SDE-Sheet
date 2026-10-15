/**
 * Problem: Check Floor and Ceil
 * Approach: Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number[]}
 */
var getFloorAndCeil = function(nums, x) {
    let low = 0;
    let high = nums.length - 1;
    let floorVal = -1;
    let ceilVal = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] <= x) {
            floorVal = nums[mid];
            low = mid + 1;
        } else {
            ceilVal = nums[mid];
            high = mid - 1;
        }
    }

    return [floorVal, ceilVal];
};