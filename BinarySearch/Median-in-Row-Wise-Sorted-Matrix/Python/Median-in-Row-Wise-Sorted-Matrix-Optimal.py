"""
Problem: Median in a Row-Wise Sorted Matrix
Approach: Binary Search on Answer + Upper Bound
Time Complexity: O(m * log(n) * log(maxVal - minVal + 1))
Space Complexity: O(1)
"""

class Solution:
    def median(self, mat: list[list[int]]) -> int:
        m = len(mat)
        n = len(mat[0])

        def upperBound(arr, target):
            low = 0
            high = n - 1
            ans = n

            while low <= high:
                mid = (low + high) // 2

                if arr[mid] > target:
                    ans = mid
                    high = mid - 1
                else:
                    low = mid + 1

            return ans

        def countSmallEqual(mat, x):
            cnt = 0

            for i in range(m):
                cnt += upperBound(mat[i], x)

            return cnt

        low = float('inf')
        high = float('-inf')

        for i in range(m):
            low = min(low, mat[i][0])
            high = max(high, mat[i][n - 1])

        req = (m * n) // 2
        ans = -1

        while low <= high:
            mid = (low + high) // 2

            smallEqual = countSmallEqual(mat, mid)

            if smallEqual > req:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans