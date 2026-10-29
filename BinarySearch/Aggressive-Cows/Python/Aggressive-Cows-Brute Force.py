"""
Problem: Aggressive Cows
Approach: Brute Force — Check Every Distance
Time Complexity: O(n log n + n * (max(arr) - min(arr)))
Space Complexity: O(1) auxiliary space
"""

class Solution:
    def aggressiveCows(self, arr, k):
        n = len(arr)
        arr.sort()

        def canPlace(arr, dist, k):
            countCows = 1
            last = arr[0]

            for i in range(1, n):
                if arr[i] - last >= dist:
                    countCows += 1
                    last = arr[i]

                if countCows >= k:
                    return True

            return False

        low = 1
        high = arr[-1] - arr[0]
        ans = 0

        for dist in range(low, high + 1):
            if canPlace(arr, dist, k):
                ans = dist
            else:
                break

        return ans