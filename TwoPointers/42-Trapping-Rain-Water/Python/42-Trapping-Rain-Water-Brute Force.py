"""
Problem: Trapping Rain Water Brute Force
Approach: Prefix and Suffix Maximum Arrays
Time Complexity: O(n²)
Space Complexity: O(1)
"""

class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)
        water = 0

        for i in range(n):
            leftMax = max(height[:i+1])
            rightMax = max(height[i:])

            water += min(leftMax, rightMax) - height[i]

        return water