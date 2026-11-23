/*
 * Problem: Maximum Sum Subarray of Size K
 * Approach: Fixed-Size Sliding Window
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class Solution {
    maxSubarraySum(arr, k) {
        let n = arr.length;
        let currSum = 0;

        // Calculate the first window
        for (let i = 0; i < k; i++) {
            currSum += arr[i];
        }

        let maxSum = currSum;

        // Slide the window
        for (let right = k; right < n; right++) {
            currSum += arr[right];
            currSum -= arr[right - k];

            maxSum = Math.max(maxSum, currSum);
        }

        return maxSum;
    }
}