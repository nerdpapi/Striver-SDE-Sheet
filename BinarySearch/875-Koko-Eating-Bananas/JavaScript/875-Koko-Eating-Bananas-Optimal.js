/**
 * Problem: 875. Koko Eating Bananas
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(max(piles)))
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

        let low = 1;
        let high = Math.max(...piles);
        let ans = 0;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const time = totalTime(piles, mid);

            if (time <= h) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}