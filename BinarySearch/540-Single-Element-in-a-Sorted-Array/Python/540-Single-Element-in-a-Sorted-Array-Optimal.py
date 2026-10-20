
"""
Problem: 540. Single Element in a Sorted Array
Approach: Binary Search using Index Parity

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def singleNonDuplicate(self, nums: list[int]) -> int:
        n = len(nums)

        if n == 1:
            return nums[0]

        if nums[0] != nums[1]:
            return nums[0]

        if nums[n - 1] != nums[n - 2]:
            return nums[n - 1]

        low = 1
        high = n - 2

        while low <= high:
            mid = (low + high) // 2

            # The single element has different neighbors
            if nums[mid] != nums[mid - 1] and nums[mid] != nums[mid + 1]:
                return nums[mid]

            # Pair is in the expected order
            elif (
                (mid % 2 == 1 and nums[mid] == nums[mid - 1])
                or
                (mid % 2 == 0 and nums[mid] == nums[mid + 1])
            ):
                low = mid + 1

            # Single element lies to the left
            else:
                high = mid - 1

        return -1
