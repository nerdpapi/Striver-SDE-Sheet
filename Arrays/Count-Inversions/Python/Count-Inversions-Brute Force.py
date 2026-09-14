"""
Problem: Count Inversions
Approach: Brute Force

Check every pair (i, j) where i < j.
If arr[i] > arr[j], the pair is an inversion.

Time Complexity: O(n^2)
Space Complexity: O(1)
"""


class Solution:
    def inversionCount(self, arr: list[int]) -> int:
        n = len(arr)
        count = 0

        for i in range(n):
            for j in range(i + 1, n):
                if arr[i] > arr[j]:
                    count += 1

        return count