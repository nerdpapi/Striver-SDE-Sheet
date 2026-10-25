/**
 * Problem: 1482. Minimum Number of Days to Make m Bouquets
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(max(bloomDay) - min(bloomDay) + 1))
 * Space Complexity: O(1)
 */

class Solution {
    minDays(bloomDay, m, k) {
        const n = bloomDay.length;

        if (m * k > n) {
            return -1;
        }

        function possible(bloomDay, day, m, k) {
            let count = 0;
            let bouquets = 0;

            for (let i = 0; i < n; i++) {
                if (bloomDay[i] <= day) {
                    count++;
                } else {
                    bouquets += Math.floor(count / k);
                    count = 0;
                }
            }

            bouquets += Math.floor(count / k);
            return bouquets >= m;
        }

        let low = Math.min(...bloomDay);
        let high = Math.max(...bloomDay);
        let ans = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (possible(bloomDay, mid, m, k)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}