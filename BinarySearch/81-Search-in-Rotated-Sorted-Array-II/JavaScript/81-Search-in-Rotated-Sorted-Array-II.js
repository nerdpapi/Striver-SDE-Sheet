
/**
 * Problem: 81. Search in Rotated Sorted Array II
 * Approach: Modified Binary Search with Duplicates
 *
 * Time Complexity: O(log n) average, O(n) worst case
 * Space Complexity: O(1)
 */

var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return true;
        }

        // Duplicates make the sorted half ambiguous
        else if (
            nums[low] === nums[mid] &&
            nums[mid] === nums[high]
        ) {
            low++;
            high--;
            continue;
        }

        // Left half is sorted
        else if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return false;
};
