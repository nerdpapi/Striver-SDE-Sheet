"""
Problem: Allocate Minimum Pages
Approach: Binary Search on Answer
Time Complexity: O(n * log(sum(arr) - max(arr) + 1))
Space Complexity: O(1)
"""

class Solution:
    def findPages(self, arr, k):
        n = len(arr)

        if k > n:
            return -1

        def cntStd(arr, pages):
            stds = 1
            page = 0

            for i in range(n):
                if page + arr[i] <= pages:
                    page += arr[i]
                else:
                    stds += 1
                    page = arr[i]

            return stds

        ans = -1
        low = max(arr)
        high = sum(arr)

        while low <= high:
            mid = (low + high) // 2
            totalStd = cntStd(arr, mid)

            if totalStd <= k:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans