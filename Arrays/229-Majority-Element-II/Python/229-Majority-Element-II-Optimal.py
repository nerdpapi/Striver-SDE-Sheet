"""
Problem: 169. Majority Element
Approach: Optimal - Moore's Voting Algorithm

Phase 1:
Find a potential majority candidate using voting.

Phase 2:
Verify that the candidate actually appears more than n / 2 times.

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        count = 0
        el = nums[0]

        # Phase 1: Find candidate
        for num in nums:
            if count == 0:
                el = num
                count = 1
            elif num == el:
                count += 1
            else:
                count -= 1

        # Phase 2: Verify candidate
        count2 = 0

        for num in nums:
            if num == el:
                count2 += 1

        if count2 > len(nums) / 2:
            return el

        return -1