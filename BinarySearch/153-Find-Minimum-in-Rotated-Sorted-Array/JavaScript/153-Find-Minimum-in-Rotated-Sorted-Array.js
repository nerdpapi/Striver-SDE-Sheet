
/**
 * Problem: 153. Find Minimum in Rotated Sorted Array
 * Approach: Modified Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let ans = Infinity;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        // Left half is sorted
        if (nums[low] <= nums[mid]) {
            ans = Math.min(ans, nums[low]);
            low = mid + 1;
        }

        // Right half is sorted
        else {
            ans = Math.min(ans, nums[mid]);
            high = mid - 1;
        }
    }

    return ans;
};