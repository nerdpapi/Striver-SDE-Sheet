"""
Problem: 34. Find First and Last Position of Element in Sorted Array
Approach: Lower Bound + Upper Bound

Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
        def lowerBound(nums, target):
            low = 0
            high = len(nums) - 1
            ans = len(nums)

            while low <= high:
                mid = (high + low) // 2

                if nums[mid] >= target:
                    ans = mid
                    high = mid - 1
                else:
                    low = mid + 1

            return ans

        def upperBound(nums, target):
            low = 0
            high = len(nums) - 1
            ans = len(nums)

            while low <= high:
                mid = (high + low) // 2

                if nums[mid] > target:
                    ans = mid
                    high = mid - 1
                else:
                    low = mid + 1

            return ans

        lb = lowerBound(nums, target)

        if lb == len(nums) or nums[lb] != target:
            return [-1, -1]

        return [lb, upperBound(nums, target) - 1]