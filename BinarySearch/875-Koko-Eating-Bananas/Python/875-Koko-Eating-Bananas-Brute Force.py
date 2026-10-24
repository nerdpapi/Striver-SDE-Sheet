"""
Problem: 875. Koko Eating Bananas
Approach: Brute Force — Try Every Eating Speed
Time Complexity: O(n * max(piles))
Space Complexity: O(1)
"""

import math

class Solution:
    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        n = len(piles)

        def totalTime(piles, hours):
            totalHours = 0

            for i in range(n):
                totalHours += math.ceil(piles[i] / hours)

            return totalHours

        for i in range(1, max(piles) + 1):
            time = totalTime(piles, i)

            if time <= h:
                return i

        return -1