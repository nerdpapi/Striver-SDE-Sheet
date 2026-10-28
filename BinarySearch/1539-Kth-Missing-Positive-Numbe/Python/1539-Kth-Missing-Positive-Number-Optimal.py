"""
Problem: 1539. Kth Missing Positive Number
Approach: Binary Search on Missing Count
Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def findKthPositive(self, arr: list[int], k: int) -> int:
        n = len(arr)

        low = 0
        high = n - 1

        while low <= high:
            mid = (low + high) // 2

            missing = arr[mid] - (mid + 1)

            if missing < k:
                low = mid + 1
            else:
                high = mid - 1

        return low + k