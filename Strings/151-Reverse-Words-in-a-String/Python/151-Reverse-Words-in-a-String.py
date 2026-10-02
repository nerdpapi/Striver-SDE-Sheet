"""
Problem: 151. Reverse Words in a String
Approach: Reverse String + Reverse Each Word

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def reverseWords(self, s: str) -> str:
        rev_s = s[::-1]
        ans = ""
        i = 0

        while i < len(rev_s):
            while i < len(rev_s) and rev_s[i] == " ":
                i += 1

            word = ""

            while i < len(rev_s) and rev_s[i] != " ":
                word += rev_s[i]
                i += 1

            if word:
                ans += " " + word[::-1]

        return ans.strip()