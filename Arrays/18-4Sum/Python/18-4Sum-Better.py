"""
Problem: 18. 4Sum
Approach: Better - HashSet

Fix i and j.
For every k, calculate the required fourth element.

Store previously seen nums[k] values in a set.
Use another set to avoid duplicate quadruplets.

Time Complexity: O(n^3)
Space Complexity: O(n)
"""

class Solution:
    def fourSum(self, nums: list[int], target: int) -> list[list[int]]:
        result = []
        seen_four = set()
        n = len(nums)

        for i in range(n):
            for j in range(i + 1, n):
                seen = set()

                for k in range(j + 1, n):
                    fourth = target - (
                        nums[i] + nums[j] + nums[k]
                    )

                    if fourth in seen:
                        temp = [
                            nums[i],
                            nums[j],
                            nums[k],
                            fourth
                        ]

                        temp.sort()
                        key = tuple(temp)

                        if key not in seen_four:
                            seen_four.add(key)
                            result.append(temp)

                    seen.add(nums[k])

        return result