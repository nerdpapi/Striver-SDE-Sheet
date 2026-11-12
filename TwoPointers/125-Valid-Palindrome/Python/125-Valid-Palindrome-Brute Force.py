"""
Problem: Valid Palindrome
Approach: Brute Force - Clean and Reverse
Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned = []

        for ch in s:
            if ch.isalnum():
                cleaned.append(ch.lower())

        cleaned = "".join(cleaned)
        return cleaned == cleaned[::-1]