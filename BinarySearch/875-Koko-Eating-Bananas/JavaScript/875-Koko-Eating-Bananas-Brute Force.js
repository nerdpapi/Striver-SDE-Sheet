/**
 * Problem: 875. Koko Eating Bananas
 * Approach: Brute Force — Try Every Eating Speed
 * Time Complexity: O(n * max(piles))
 * Space Complexity: O(1)
 */

class Solution {
    minEatingSpeed(piles, h) {
        const n = piles.length;

        function totalTime(piles, hours) {
            let totalHours = 0;

            for (let i = 0; i < n; i++) {
                totalHours += Math.ceil(piles[i] / hours);
            }

            return totalHours;
        }

        for (let i = 1; i <= Math.max(...piles); i++) {
            const time = totalTime(piles, i);

            if (time <= h) {
                return i;
            }
        }

        return -1;
    }
}