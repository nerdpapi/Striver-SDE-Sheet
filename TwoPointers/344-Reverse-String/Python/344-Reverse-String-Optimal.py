"""
Problem: Reverse String
Approach: Two Pointers - In-Place
Time Complexity: O(n)
Space Complexity: O(1)
"""

class Solution:
    def reverseString(self, s: list[str]) -> None:
        n = len(s)

        left = 0
        right = n - 1

        while left < right:
            temp = s[left]
            s[left] = s[right]
            s[right] = temp

            left += 1
            right -= 1