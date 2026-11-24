
"""
*
* Problem: 2461. Maximum Sum of Distinct Subarrays With Length K
* Approach: Brute Force - Generate every window of size k
*
* Time Complexity: O((n - k + 1) * k) = O(n * k)
* Space Complexity: O(k)
*
"""

from collections import defaultdict

class Solution:
    def maximumSubarraySum(self, nums: list[int], k: int) -> int:
        n = len(nums)
        maxSum = 0

        for i in range(n - k + 1):
            freq_map = defaultdict(int)
            currSum = 0

            for j in range(i, i + k):
                currSum += nums[j]
                freq_map[nums[j]] += 1

            if len(freq_map) == k:
                maxSum = max(maxSum, currSum)

        return maxSum
