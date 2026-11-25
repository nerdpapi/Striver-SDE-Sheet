
"""
*
* Problem: 455. Assign Cookies
* Approach: Optimal - Sorting + Greedy + Two Pointers
*
* Time Complexity: O(n log n + m log m)
* Space Complexity: O(1) auxiliary space, excluding sorting
*
"""

class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        g.sort()
        s.sort()

        left = 0
        right = 0

        while left < len(s) and right < len(g):
            if s[left] >= g[right]:
                right += 1

            left += 1

        return right
