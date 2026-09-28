class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        m = len(s)
        n = len(t)

        if m != n:
            return False

        seen = [0] * 256

        for i in range(m):
            seen[ord(s[i])] += 1
            seen[ord(t[i])] -= 1

        for count in seen:
            if count != 0:
                return False

        return True