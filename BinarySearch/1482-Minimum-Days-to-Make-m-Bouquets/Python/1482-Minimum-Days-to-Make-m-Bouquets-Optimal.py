"""
Problem: 1482. Minimum Number of Days to Make m Bouquets
Approach: Binary Search on Answer
Time Complexity: O(n * log(max(bloomDay) - min(bloomDay) + 1))
Space Complexity: O(1)
"""

class Solution:
    def minDays(self, bloomDay: list[int], m: int, k: int) -> int:
        n = len(bloomDay)

        if m * k > n:
            return -1

        def possible(bloomDay, day, m, k):
            count = 0
            bouquets = 0

            for i in range(n):
                if bloomDay[i] <= day:
                    count += 1
                else:
                    bouquets += count // k
                    count = 0

            bouquets += count // k
            return bouquets >= m

        low, high = min(bloomDay), max(bloomDay)
        ans = -1

        while low <= high:
            mid = (low + high) // 2

            if possible(bloomDay, mid, m, k):
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans