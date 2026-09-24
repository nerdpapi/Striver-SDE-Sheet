"""
Problem: Largest Subarray with 0 Sum
Approach: Brute Force

Generate every subarray and maintain its sum.
Whenever the sum becomes zero, update the maximum length.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def maxLength(self, arr: list[int]) -> int:
        n = len(arr)
        longest = 0

        for i in range(n):
            total = 0

            for j in range(i, n):
                total += arr[j]

                if total == 0:
                    longest = max(longest, j - i + 1)

        return longest