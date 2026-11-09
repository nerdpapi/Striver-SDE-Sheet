"""
Problem: Two Sum II - Input Array Is Sorted
Approach: Brute Force - Nested Loops
Time Complexity: O(n^2)
Space Complexity: O(1)
"""

class Solution:
    def twoSum(self, numbers: list[int], target: int) -> list[int]:
        n = len(numbers)

        for i in range(n):
            for j in range(i + 1, n):
                if numbers[i] + numbers[j] == target:
                    return [i + 1, j + 1]

        return []