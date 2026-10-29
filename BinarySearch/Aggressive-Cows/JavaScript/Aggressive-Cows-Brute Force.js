/**
 * Problem: Aggressive Cows
 * Approach: Brute Force — Check Every Distance
 * Time Complexity: O(n log n + n * (max(arr) - min(arr)))
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

        for (let dist = low; dist <= high; dist++) {
            if (canPlace(arr, dist, k)) {
                ans = dist;
            } else {
                break;
            }
        }

        return ans;
    }
}