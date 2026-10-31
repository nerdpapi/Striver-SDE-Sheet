"""
Problem: 410. Split Array Largest Sum
Approach: Brute Force — Linear Search on Answer
Time Complexity: O(n * (sum(nums) - max(nums) + 1))
Space Complexity: O(1)
"""

class Solution:
    def splitArray(self, nums: list[int], k: int) -> int:
        n = len(nums)

        def cntSub(nums, maxSum):
            subArr = 1
            currSum = 0

            for i in range(n):
                if currSum + nums[i] > maxSum:
                    subArr += 1
                    currSum = nums[i]
                else:
                    currSum += nums[i]

            return subArr

        low = max(nums)
        high = sum(nums)

        for maxSum in range(low, high + 1):
            if cntSub(nums, maxSum) <= k:
                return maxSum

        return -1