/**
 * Problem: Implement Lower Bound
 * Approach: Binary Search
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

class Solution {
    lowerBound(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        let ans = arr.length;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] >= target) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}