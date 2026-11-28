
"""
*
* Problem: 45. Jump Game II
* Approach: Optimal - Greedy + Range Expansion
*
* Time Complexity: O(n)
* Space Complexity: O(1)
*
"""

class Solution:
    def jump(self, nums: list[int]) -> int:
        n = len(nums)

        jump = 0
        l = 0
        r = 0

        while r < n - 1:
            farthest = 0

            for i in range(l, r + 1):
                farthest = max(farthest, i + nums[i])

            jump += 1
            l = r + 1
            r = farthest

        return jump
