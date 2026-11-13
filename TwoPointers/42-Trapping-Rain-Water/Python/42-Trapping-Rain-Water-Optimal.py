"""
Problem: Trapping Rain Water
Approach: Two Pointers
Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)

        left = 0
        right = n - 1

        lMax = 0
        rMax = 0

        total = 0

        while left < right:

            if height[left] <= height[right]:

                if lMax > height[left]:
                    total += lMax - height[left]
                else:
                    lMax = height[left]

                left += 1

            else:

                if rMax > height[right]:
                    total += rMax - height[right]
                else:
                    rMax = height[right]

                right -= 1

        return total