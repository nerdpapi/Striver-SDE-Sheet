/**
 * Problem: 1283. Find the Smallest Divisor Given a Threshold
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(max(nums)))
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

        let low = 1;
        let high = Math.max(...nums);
        let ans = -1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (sumDiv(nums, mid) <= threshold) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}