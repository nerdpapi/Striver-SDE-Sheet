"""
Problem: Minimize Max Distance of Adjacent Gas Stations
Approach: Brute Force — Greedy Linear Search
Time Complexity: O(k * n)
Space Complexity: O(n)
"""

class Solution:
    def minMaxDist(self, stations, k):
        n = len(stations)
        howMany = [0] * (n - 1)

        for _ in range(k):
            maxLength = -1
            maxIndex = -1

            for i in range(n - 1):
                gap = stations[i + 1] - stations[i]
                newLength = gap / (howMany[i] + 1)

                if newLength > maxLength:
                    maxLength = newLength
                    maxIndex = i

            howMany[maxIndex] += 1

        maxAns = -1

        for i in range(n - 1):
            gap = stations[i + 1] - stations[i]
            newLength = gap / (howMany[i] + 1)
            maxAns = max(maxAns, newLength)

        return maxAns