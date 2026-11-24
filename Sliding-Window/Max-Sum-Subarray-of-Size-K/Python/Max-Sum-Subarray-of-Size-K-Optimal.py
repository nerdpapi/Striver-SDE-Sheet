"""
*
* Problem: Maximum Sum Subarray of Size K
* Approach: Fixed-Size Sliding Window
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
"""

class Solution:
    def maxSubarraySum(self, arr, k):
        n = len(arr)
        maxSum = float('-inf')
        total = 0
        left = 0
        for right in range(n):
            total += arr[right]
            if right - left + 1 == k:
                maxSum = max(maxSum, total)
                total -= arr[left]
                left += 1

        return maxSum
