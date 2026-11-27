
"""
*
* Problem: 55. Jump Game
* Approach: Optimal - Greedy + Maximum Reachability
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
"""

class Solution:
    def canJump(self, nums: list[int]) -> bool:
        n = len(nums)
        maxIdx = 0

        for i in range(n):

            if maxIdx < i:
                return False

            maxIdx = max(maxIdx, nums[i] + i)

            if maxIdx >= n - 1:
                return True

        return True