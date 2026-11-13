"""
Problem: Trapping Rain Water
Approach: Prefix and Suffix Maximum Arrays
Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)

        if n == 0:
            return 0

        lMax = [0] * n
        lMax[0] = height[0]

        for i in range(1, n):
            lMax[i] = max(lMax[i - 1], height[i])

        rMax = [0] * n
        rMax[n - 1] = height[n - 1]

        for i in range(n - 2, -1, -1):
            rMax[i] = max(rMax[i + 1], height[i])

        total = 0

        for i in range(n):
            leftMax = lMax[i]
            rightMax = rMax[i]

            total += min(leftMax, rightMax) - height[i]

        return total