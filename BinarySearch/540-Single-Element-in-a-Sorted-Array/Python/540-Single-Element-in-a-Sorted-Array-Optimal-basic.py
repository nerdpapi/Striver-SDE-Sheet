
"""
Problem: 540. Single Element in a Sorted Array
Approach: Binary Search with Index Parity
Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def singleNonDuplicate(self, nums: list[int]) -> int:
        n = len(nums)

        if n == 1:
            return nums[0]

        low = 0
        high = n - 1

        while low <= high:
            mid = (low + high) // 2

            if (
                (mid == 0 or nums[mid] != nums[mid - 1])
                and
                (mid == n - 1 or nums[mid] != nums[mid + 1])
            ):
                return nums[mid]

            elif mid % 2 == 0:
                if nums[mid] == nums[mid + 1]:
                    low = mid + 1
                else:
                    high = mid - 1

            else:
                if nums[mid] == nums[mid - 1]:
                    low = mid + 1
                else:
                    high = mid - 1

        return -1
