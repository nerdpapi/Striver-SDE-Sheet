/**
 * Problem: 34. Find First and Last Position of Element in Sorted Array
 * Approach: First Occurrence + Last Occurrence
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
    function firstOccur(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        let first = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === target) {
                first = mid;
                high = mid - 1;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return first;
    }

    function lastOccur(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        let last = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] === target) {
                last = mid;
                low = mid + 1;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return last;
    }

    const first = firstOccur(nums, target);
    const last = lastOccur(nums, target);

    if (first === -1) {
        return [-1, -1];
    }

    return [first, last];
};