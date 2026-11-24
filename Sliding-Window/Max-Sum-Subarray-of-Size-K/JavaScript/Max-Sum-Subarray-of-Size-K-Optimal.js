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
        let maxSum = 0;
        let currSum = 0;
        let left = 0;
        for (let right = 0; right < n; right++) {
            currSum += arr[right];
            if (right - left + 1 === k) {
                maxSum = Math.max(maxSum, currSum);
                currSum -= arr[left];
                left++;
            }
        }
        return maxSum;
    }
}