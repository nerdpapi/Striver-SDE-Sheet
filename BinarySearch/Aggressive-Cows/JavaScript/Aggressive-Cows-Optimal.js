/**
 * Problem: Aggressive Cows
 * Approach: Binary Search on Answer
 * Time Complexity: O(n log n + n * log(max(arr) - min(arr)))
 * Space Complexity: O(1) auxiliary space
 */

class Solution {
    aggressiveCows(arr, k) {
        const n = arr.length;
        arr.sort((a, b) => a - b);

        function canPlace(arr, dist, k) {
            let countCows = 1;
            let last = arr[0];

            for (let i = 1; i < n; i++) {
                if (arr[i] - last >= dist) {
                    countCows++;
                    last = arr[i];
                }

                if (countCows >= k) {
                    return true;
                }
            }

            return false;
        }

        let low = 1;
        let high = arr[n - 1] - arr[0];
        let ans = 0;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (canPlace(arr, mid, k)) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return ans;
    }
}