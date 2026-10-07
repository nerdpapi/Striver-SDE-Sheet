"""
Problem: 1614. Maximum Nesting Depth of the Parentheses
Approach: Depth Counting

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def maxDepth(self, s: str) -> int:
        ans = 0
        depth = 0

        for ch in s:
            if ch == "(":
                depth += 1
            elif ch == ")":
                depth -= 1

            ans = max(ans, depth)

        return ans