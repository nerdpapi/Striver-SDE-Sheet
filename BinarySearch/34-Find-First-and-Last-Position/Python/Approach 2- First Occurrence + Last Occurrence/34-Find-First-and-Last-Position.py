"""
Problem: 34. Find First and Last Position of Element in Sorted Array
Approach: First Occurrence + Last Occurrence

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        def firstOccur(arr, target):
            low = 0
            high = len(arr) - 1
            first = -1

            while low <= high:
                mid = (low + high) // 2

                if arr[mid] == target:
                    first = mid
                    high = mid - 1
                elif arr[mid] < target:
                    low = mid + 1
                else:
                    high = mid - 1

            return first

        def lastOccur(arr, target):
            low = 0
            high = len(arr) - 1
            last = -1

            while low <= high:
                mid = (low + high) // 2

                if arr[mid] == target:
                    last = mid
                    low = mid + 1
                elif arr[mid] < target:
                    low = mid + 1
                else:
                    high = mid - 1

            return last

        fst = firstOccur(nums, target)
        lst = lastOccur(nums, target)

        if fst == -1:
            return [-1, -1]

        return [fst, lst]