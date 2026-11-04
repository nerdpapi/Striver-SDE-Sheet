"""
Problem: Row with Maximum 1s
Approach: Binary Search - Lower Bound
Time Complexity: O(m * log n)
Space Complexity: O(1)
"""

class Solution:
    def rowWithMax1s(self, arr: list[list[int]]) -> int:
        m = len(arr)
        n = len(arr[0])

        def lowerBound(arr, n, x):
            low = 0
            high = n - 1
            ans = -1

            while low <= high:
                mid = (low + high) // 2

                if arr[mid] >= x:
                    ans = mid
                    high = mid - 1
                else:
                    low = mid + 1

            return ans

        count_max = 0
        idx = -1

        for i in range(m):
            count_one = n - lowerBound(arr[i], n, 1)

            if count_one > count_max:
                count_max = count_one
                idx = i

        return idx