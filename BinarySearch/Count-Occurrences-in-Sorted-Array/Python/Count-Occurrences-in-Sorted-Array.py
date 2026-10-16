"""
Problem: Count Occurrences in a Sorted Array
Approach: First and Last Occurrence using Binary Search

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def countFreq(self, arr: list[int], target: int) -> int:
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

        first = firstOccur(arr, target)
        last = lastOccur(arr, target)

        if first == -1:
            return 0

        return last - first + 1