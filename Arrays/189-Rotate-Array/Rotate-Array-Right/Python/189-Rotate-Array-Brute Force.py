
"""
Problem: 189. Rotate Array — Right Rotation
Approach: Brute Force using Temporary Array
Time Complexity: O(n)
Space Complexity: O(k)
"""

class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        n = len(nums)
        if n == 0:
            return

        k %= n
        temp = []

        for i in range(n - k, n):
            temp.append(nums[i])

        for i in range(n - k - 1, -1, -1):
            nums[i + k] = nums[i]

        for i in range(k):
            nums[i] = temp[i]
