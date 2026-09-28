class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        m = len(s)
        n = len(t)

        if m != n:
            return False

        used = [False] * n

        for i in range(m):
            found = False

            for j in range(n):
                if s[i] == t[j] and not used[j]:
                    used[j] = True
                    found = True
                    break

            if not found:
                return False

        return True