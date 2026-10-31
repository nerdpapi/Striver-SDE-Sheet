"""
Problem: Painter's Partition Problem
Approach: Brute Force — Check Every Time Limit
Time Complexity: O(n * (sum(arr) - max(arr) + 1))
Space Complexity: O(1)
"""

class Solution:
    def minTime(self, arr, k):
        n = len(arr)

        def countPainters(arr, maxTime):
            painters = 1
            currTime = 0

            for num in arr:
                if currTime + num > maxTime:
                    painters += 1
                    currTime = num
                else:
                    currTime += num

            return painters

        low = max(arr)
        high = sum(arr)

        for time in range(low, high + 1):
            if countPainters(arr, time) <= k:
                return time

        return -1