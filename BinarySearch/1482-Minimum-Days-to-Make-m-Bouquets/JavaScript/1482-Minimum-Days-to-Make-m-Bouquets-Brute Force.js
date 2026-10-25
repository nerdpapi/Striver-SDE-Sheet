/**
 * Problem: 1482. Minimum Number of Days to Make m Bouquets
 * Approach: Brute Force — Check Each Day
 * Time Complexity: O(n * (max(bloomDay) - min(bloomDay) + 1))
 * Space Complexity: O(1)
 */

class Solution {
    minDays(bloomDay, m, k) {
        const n = bloomDay.length;

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

        if (m * k > n) {
            return -1;
        }

        const minDay = Math.min(...bloomDay);
        const maxDay = Math.max(...bloomDay);

        for (let day = minDay; day <= maxDay; day++) {
            if (possible(bloomDay, day, m, k)) {
                return day;
            }
        }

        return -1;
    }
}