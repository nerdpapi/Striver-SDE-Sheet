/**
 * Problem: 34. Find First and Last Position of Element in Sorted Array
 * Approach: Lower Bound + Upper Bound
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function lowerBound(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        let ans = nums.length;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (nums[mid] >= target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    function upperBound(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        let ans = nums.length;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (nums[mid] > target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }

    const lb = lowerBound(nums, target);

    if (lb === nums.length || nums[lb] !== target) {
        return [-1, -1];
    }

    return [lb, upperBound(nums, target) - 1];
};