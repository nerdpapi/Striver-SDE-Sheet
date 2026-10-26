/**
 * Problem: 1283. Find the Smallest Divisor Given a Threshold
 * Approach: Brute Force — Check Every Divisor
 * Time Complexity: O(n * max(nums))
 * Space Complexity: O(1)
 */

class Solution {
    smallestDivisor(nums, threshold) {
        const n = nums.length;

        function sumDiv(nums, div) {
            let total = 0;

            for (let i = 0; i < n; i++) {
                total += Math.ceil(nums[i] / div);
            }

            return total;
        }

        for (let div = 1; div <= Math.max(...nums); div++) {
            if (sumDiv(nums, div) <= threshold) {
                return div;
            }
        }

        return -1;
    }
}