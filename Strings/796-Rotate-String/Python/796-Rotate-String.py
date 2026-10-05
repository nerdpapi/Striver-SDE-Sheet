"""
Problem: 796. Rotate String
Approach: String Concatenation

A string is a rotation of another string if it appears
as a substring of the original string concatenated with itself.

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False

        return goal in s + s