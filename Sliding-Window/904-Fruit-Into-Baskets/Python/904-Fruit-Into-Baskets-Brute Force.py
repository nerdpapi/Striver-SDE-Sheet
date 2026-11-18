class Solution:
    def totalFruit(self, fruits: list[int]) -> int:
        maxLen = 0
        n = len(fruits)

        for i in range(n):
            f_type = set()

            for j in range(i, n):
                f_type.add(fruits[j])

                if len(f_type) <= 2:
                    length = j - i + 1
                    maxLen = max(maxLen, length)
                else:
                    break

        return maxLen