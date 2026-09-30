"""
Problem: 1021. Remove Outermost Parentheses
Approach: Optimal - Depth Counting

Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        depth = 0
        ans = ""

        for ch in s:
            if ch == ")":
                depth -= 1

            if depth > 0:
                ans += ch

            if ch == "(":
                depth += 1

        return ans