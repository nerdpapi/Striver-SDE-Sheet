"""
Problem: 1021. Remove Outermost Parentheses
Approach: Brute Force - Stack

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        stack = []
        ans = ""

        for ch in s:
            if ch == ")":
                stack.pop()

            if stack:
                ans += ch

            if ch == "(":
                stack.append(ch)

        return ans