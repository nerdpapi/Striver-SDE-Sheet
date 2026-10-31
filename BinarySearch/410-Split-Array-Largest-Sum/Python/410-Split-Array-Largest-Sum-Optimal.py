"""
Problem: 410. Split Array Largest Sum
Approach: Binary Search on Answer
Time Complexity: O(n * log(sum(nums) - max(nums) + 1))
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
        ans = -1

        while low <= high:
            mid = (low + high) // 2

            if cntSub(nums, mid) <= k:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans