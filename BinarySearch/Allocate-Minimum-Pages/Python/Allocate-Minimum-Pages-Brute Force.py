"""
Problem: Allocate Minimum Pages
Approach: Brute Force — Check Every Page Limit
Time Complexity: O(n * (sum(arr) - max(arr) + 1))
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

        low = max(arr)
        high = sum(arr)

        for pages in range(low, high + 1):
            totalStd = cntStd(arr, pages)

            if totalStd <= k:
                return pages

        return -1