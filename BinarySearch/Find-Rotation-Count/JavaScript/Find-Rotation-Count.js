
/**
 * Problem: Find Rotation Count
 * Approach: Modified Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

class Solution {
    findKRotation(arr) {
        let low = 0;
        let high = arr.length - 1;
        let ans = Infinity;
        let index = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            // Left half is sorted
            if (arr[low] <= arr[mid]) {
                if (arr[low] < ans) {
                    ans = arr[low];
                    index = low;
                }

                low = mid + 1;
            }

            // Right half contains the minimum candidate
            else {
                if (arr[mid] < ans) {
                    ans = arr[mid];
                    index = mid;
                }

                high = mid - 1;
            }
        }

        return index;
    }
}
