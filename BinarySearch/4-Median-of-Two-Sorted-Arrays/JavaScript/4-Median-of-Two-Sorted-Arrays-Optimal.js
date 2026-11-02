/**
 * Problem: Minimize Max Distance of Adjacent Gas Stations
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(maxGap / epsilon))
 * Space Complexity: O(1)
 */

class Solution {
    minMaxDist(stations, k) {
        const n = stations.length;

        function requiredStations(dist) {
            let total = 0;

            for (let i = 0; i < n - 1; i++) {
                let gap = stations[i + 1] - stations[i];

                total += Math.ceil(gap / dist) - 1;

                if (total > k) {
                    return total;
                }
            }

            return total;
        }

        let low = 0;
        let high = 0;

        for (let i = 0; i < n - 1; i++) {
            high = Math.max(
                high,
                stations[i + 1] - stations[i]
            );
        }

        const diff = 1e-6;

        while (high - low > diff) {
            let mid = (low + high) / 2;

            let count = requiredStations(mid);

            if (count > k) {
                low = mid;
            } else {
                high = mid;
            }
        }

        return high;
    }
}