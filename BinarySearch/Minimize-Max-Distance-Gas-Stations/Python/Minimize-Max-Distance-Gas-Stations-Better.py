"""
Problem: Minimize Max Distance of Adjacent Gas Stations
Approach: Max Heap / Priority Queue
Time Complexity: O(n + k * log n)
Space Complexity: O(n)
"""

import heapq

class Solution:
    def minMaxDist(self, stations, k):
        n = len(stations)
        howMany = [0] * (n - 1)

        pq = []

        for i in range(n - 1):
            gap = stations[i + 1] - stations[i]
            heapq.heappush(pq, (-gap, i))

        for _ in range(k):
            largestGap, index = heapq.heappop(pq)

            howMany[index] += 1

            originalGap = stations[index + 1] - stations[index]
            newGap = originalGap / (howMany[index] + 1)

            heapq.heappush(pq, (-newGap, index))

        return -pq[0][0]