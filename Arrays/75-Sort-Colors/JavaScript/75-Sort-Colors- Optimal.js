/**
 * Problem: 75. Sort Colors
 * Approach: Optimal - Dutch National Flag Algorithm
 *
 * Use three pointers:
 * low  -> boundary for 0
 * mid  -> current element
 * high -> boundary for 2
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void}
 */

var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {

        if (nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }

        else if (nums[mid] === 1) {
            mid++;
        }

        else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};