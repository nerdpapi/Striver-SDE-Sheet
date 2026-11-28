
"""
*
* Problem: 45. Jump Game II
* Approach: Brute Force - Recursion
*
* Time Complexity: O(2^n)
* Space Complexity: O(n)
*
"""

class Solution:
    def jump(self, nums: list[int]) -> int:
        n = len(nums)

        def jumps(index, jump):
            if index >= n - 1:
                return jump

            min_jump = float('inf')

            for i in range(1, nums[index] + 1):
                min_jump = min(
                    min_jump,
                    jumps(index + i, jump + 1)
                )

            return min_jump

        return jumps(0, 0)
