"""
Problem: 229. Majority Element II
Approach: Optimal - Extended Moore's Voting Algorithm

There can be at most two elements occurring more than n / 3 times.

Maintain two candidates and their counts.

Phase 1:
Find two potential candidates.

Phase 2:
Count their actual frequencies and verify them.

Time Complexity: O(n)
Space Complexity: O(1) excluding output
"""

class Solution:
    def majorityElement(self, nums: list[int]) -> list[int]:
        n = len(nums)

        count1 = 0
        count2 = 0
        el1 = None
        el2 = None

        # Phase 1: Find candidates
        for num in nums:
            if count1 == 0 and num != el2:
                el1 = num
                count1 = 1

            elif count2 == 0 and num != el1:
                el2 = num
                count2 = 1

            elif num == el1:
                count1 += 1

            elif num == el2:
                count2 += 1

            else:
                count1 -= 1
                count2 -= 1

        # Phase 2: Verify candidates
        count1 = 0
        count2 = 0

        for num in nums:
            if num == el1:
                count1 += 1

            if num == el2:
                count2 += 1

        result = []

        if count1 > n / 3:
            result.append(el1)

        if count2 > n / 3:
            result.append(el2)

        return result