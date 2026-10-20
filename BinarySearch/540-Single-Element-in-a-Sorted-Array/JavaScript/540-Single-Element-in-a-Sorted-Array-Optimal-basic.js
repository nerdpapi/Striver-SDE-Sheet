
/**
 * Problem: 540. Single Element in a Sorted Array
 * Approach: Binary Search with Index Parity
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

var singleNonDuplicate = function(nums) {
    const n = nums.length;

    if (n === 1) return nums[0];

    let low = 0;
    let high = n - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (
            (mid === 0 || nums[mid] !== nums[mid - 1]) &&
            (mid === n - 1 || nums[mid] !== nums[mid + 1])
        ) {
            return nums[mid];
        } else if (mid % 2 === 0) {
            if (nums[mid] === nums[mid + 1]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (nums[mid] === nums[mid - 1]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};
