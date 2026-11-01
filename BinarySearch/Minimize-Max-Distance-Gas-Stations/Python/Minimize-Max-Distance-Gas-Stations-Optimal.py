"""
Problem: Minimize Max Distance of Adjacent Gas Stations
Approach: Binary Search on Answer
Time Complexity: O(n * log(maxGap / epsilon))
Space Complexity: O(1)
"""

import math

class Solution:
    def minMaxDist(self, stations, k):
        n = len(stations)

        def requiredStations(dist):
            total = 0

            for i in range(n - 1):
                gap = stations[i + 1] - stations[i]

                total += math.ceil(gap / dist) - 1

                if total > k:
                    return total

            return total

        low = 0
        high = 0

        for i in range(n - 1):
            high = max(high, stations[i + 1] - stations[i])

        diff = 1e-6

        while high - low > diff:
            mid = (low + high) / 2

            count = requiredStations(mid)

            if count > k:
                low = mid
            else:
                high = mid

        return high