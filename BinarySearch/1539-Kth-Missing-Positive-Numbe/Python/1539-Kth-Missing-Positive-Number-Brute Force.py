"""
Problem: 1539. Kth Missing Positive Number
Approach: Brute Force — Adjust k While Traversing
Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def findKthPositive(self, arr: list[int], k: int) -> int:
        n = len(arr)

        for i in range(n):
            if arr[i] <= k:
                k += 1
            else:
                break

        return k