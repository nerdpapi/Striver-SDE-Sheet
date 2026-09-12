"""
Problem: 287. Find the Duplicate Number
Approach: Optimal - Floyd's Cycle Detection

Treat the array as a linked list where:
index -> nums[index]

The duplicate number creates a cycle.
Use Floyd's slow and fast pointers to find the cycle entrance.

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def findDuplicate(self, nums: list[int]) -> int:

        # Phase 1: Find meeting point
        slow = nums[0]
        fast = nums[0]

        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]

            if slow == fast:
                break

        # Phase 2: Find cycle entrance
        slow = nums[0]

        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]

        return slow