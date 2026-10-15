/**
 * Problem: 35. Search Insert Position
 * Approach: Binary Search - Lower Bound
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let ans = nums.length;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);

        if (nums[mid] >= target) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};