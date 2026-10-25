"""
Problem: 1482. Minimum Number of Days to Make m Bouquets
Approach: Brute Force — Check Each Day
Time Complexity: O(n * (max(bloomDay) - min(bloomDay) + 1))
Space Complexity: O(1)
"""

class Solution:
    def minDays(self, bloomDay: list[int], m: int, k: int) -> int:
        n = len(bloomDay)

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

        if m * k > n:
            return -1

        for day in range(min(bloomDay), max(bloomDay) + 1):
            if possible(bloomDay, day, m, k):
                return day

        return -1