"""
Problem: 875. Koko Eating Bananas
Approach: Binary Search on Answer
Time Complexity: O(n * log(max(piles)))
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

        low = 1
        high = max(piles)
        ans = 0

        while low <= high:
            mid = (low + high) // 2
            time = totalTime(piles, mid)

            if time <= h:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans