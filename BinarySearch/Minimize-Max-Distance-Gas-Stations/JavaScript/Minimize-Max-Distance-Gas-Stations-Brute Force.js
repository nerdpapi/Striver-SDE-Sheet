/**
 * Problem: Minimize Max Distance of Adjacent Gas Stations
 * Approach: Brute Force — Greedy Linear Search
 * Time Complexity: O(k * n)
 * Space Complexity: O(n)
 */

class Solution {
    minMaxDist(stations, k) {
        const n = stations.length;
        const howMany = new Array(n - 1).fill(0);

        for (let gasStations = 1; gasStations <= k; gasStations++) {
            let maxLength = -1;
            let maxIndex = -1;

            for (let i = 0; i < n - 1; i++) {
                let gap = stations[i + 1] - stations[i];
                let newLength = gap / (howMany[i] + 1);

                if (newLength > maxLength) {
                    maxLength = newLength;
                    maxIndex = i;
                }
            }

            howMany[maxIndex]++;
        }

        let maxAns = -1;

        for (let i = 0; i < n - 1; i++) {
            let gap = stations[i + 1] - stations[i];
            let newLength = gap / (howMany[i] + 1);

            maxAns = Math.max(maxAns, newLength);
        }

        return maxAns;
    }
}