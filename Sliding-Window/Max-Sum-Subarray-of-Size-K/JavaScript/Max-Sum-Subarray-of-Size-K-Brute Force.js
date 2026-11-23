/*
 * Problem: Maximum Sum Subarray of Size K
 * Approach: Brute Force
 *
 * Time Complexity: O((n-k+1) * k)
 * Space Complexity: O(1)
 */

class Solution {
    maxSubarraySum(arr, k) {
        let n = arr.length;
        let maxSum = -Infinity;

        for (let i = 0; i <= n - k; i++) {
            let total = 0;

            for (let j = i; j < i + k; j++) {
                total += arr[j];
            }

            maxSum = Math.max(maxSum, total);
        }

        return maxSum;
    }
}