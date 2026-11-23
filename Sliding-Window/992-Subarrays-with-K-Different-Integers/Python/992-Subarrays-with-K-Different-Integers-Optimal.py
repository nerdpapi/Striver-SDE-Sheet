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

        currSum = 0

        # Calculate the first window
        for i in range(k):
            currSum += arr[i]

        maxSum = currSum

        # Slide the window
        for right in range(k, n):
            currSum += arr[right]
            currSum -= arr[right - k]

            maxSum = max(maxSum, currSum)

        return maxSum