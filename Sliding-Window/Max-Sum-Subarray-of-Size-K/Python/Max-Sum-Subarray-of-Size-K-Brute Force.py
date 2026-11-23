"""
*
* Problem: Maximum Sum Subarray of Size K
* Approach: Brute Force
*
* Time Complexity: O((n-k+1) * k)
* Space Complexity: O(1)
*
"""

class Solution:
    def maxSubarraySum(self, arr, k):
        n = len(arr)
        maxSum = float('-inf')

        for i in range(n - k + 1):
            total = 0

            for j in range(i, i + k):
                total += arr[j]

            maxSum = max(maxSum, total)

        return maxSum