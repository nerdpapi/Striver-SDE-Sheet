/**
 * Problem: Count Occurrences in a Sorted Array
 * Approach: First and Last Occurrence using Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

class Solution {
    countFreq(arr, target) {
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

        const first = firstOccur(arr, target);
        const last = lastOccur(arr, target);

        if (first === -1) {
            return 0;
        }

        return last - first + 1;
    }
}