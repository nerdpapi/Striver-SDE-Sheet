"""
Problem: 15. 3Sum
Approach: Better - HashSet

Fix one element and use a HashSet to find the required
third element for every second element.

Store sorted triplets in a set to remove duplicates.

Time Complexity: O(n^2)
Space Complexity: O(n)
"""

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        seen_triplets = set()

        for i in range(len(nums)):
            seen = set()

            for j in range(i + 1, len(nums)):

                diff = -(nums[i] + nums[j])

                if diff in seen:

                    triplet = [nums[i], nums[j], diff]
                    triplet.sort()

                    key = tuple(triplet)

                    if key not in seen_triplets:
                        seen_triplets.add(key)
                        result.append(triplet)

                seen.add(nums[j])

        return result