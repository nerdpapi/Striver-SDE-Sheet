"""
Problem: Painter's Partition Problem
Approach: Binary Search on Answer
Time Complexity: O(n * log(sum(arr) - max(arr) + 1))
Space Complexity: O(1)
"""

class Solution:
    def minTime(self, arr, k):
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
        ans = -1

        while low <= high:
            mid = (low + high) // 2

            if countPainters(arr, mid) <= k:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans