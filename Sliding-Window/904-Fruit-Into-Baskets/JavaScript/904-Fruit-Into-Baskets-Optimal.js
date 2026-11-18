from collections import defaultdict

class Solution:
    def totalFruit(self, fruits: list[int]) -> int:
        maxLen = 0
        n = len(fruits)

        f_type = defaultdict(int)
        left = 0

        for right in range(n):
            f_type[fruits[right]] += 1

            if len(f_type) > 2:
                f_type[fruits[left]] -= 1

                if f_type[fruits[left]] == 0:
                    del f_type[fruits[left]]

                left += 1

            if len(f_type) <= 2:
                maxLen = max(maxLen, right - left + 1)

        return maxLen