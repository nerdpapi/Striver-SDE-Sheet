
"""
*
* Problem: 45. Jump Game II
* Approach: Better - Recursion + 2D Memoization
*
* Time Complexity: O(n^3)
* Space Complexity: O(n^2) + O(n) recursion stack
*
"""

class Solution:
    def jump(self, nums: list[int]) -> int:
        n = len(nums)

        dp = [[-1] * n for _ in range(n)]

        def jumps(index, jump):
            if index >= n - 1:
                return jump

            if dp[index][jump] != -1:
                return dp[index][jump]

            min_jump = float('inf')

            for i in range(1, nums[index] + 1):
                min_jump = min(
                    min_jump,
                    jumps(index + i, jump + 1)
                )

            dp[index][jump] = min_jump

            return dp[index][jump]

        return jumps(0, 0)
