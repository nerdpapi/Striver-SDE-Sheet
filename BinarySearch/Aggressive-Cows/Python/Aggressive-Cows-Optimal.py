"""
Problem: Aggressive Cows
Approach: Binary Search on Answer
Time Complexity: O(n log n + n * log(max(arr) - min(arr)))
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

        while low <= high:
            mid = (low + high) // 2

            if canPlace(arr, mid, k):
                ans = mid
                low = mid + 1
            else:
                high = mid - 1

        return ans