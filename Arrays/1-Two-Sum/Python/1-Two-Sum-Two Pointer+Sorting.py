"""
Problem: 1. Two Sum
Approach: Two Pointers + Sorting

Store each number with its original index.
Sort by value, then use two pointers.

- If sum == target → answer found
- If sum < target → move left forward
- If sum > target → move right backward

Time Complexity: O(n log n)
Space Complexity: O(n)
"""

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        arr = [(num, index) for index, num in enumerate(nums)]

        arr.sort()

        left = 0
        right = len(arr) - 1

        while left < right:
            total = arr[left][0] + arr[right][0]

            if total == target:
                return [arr[left][1], arr[right][1]]
            elif total < target:
                left += 1
            else:
                right -= 1

        return []