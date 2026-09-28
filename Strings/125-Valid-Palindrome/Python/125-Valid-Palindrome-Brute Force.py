import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleared = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
        return cleared == cleared[::-1]