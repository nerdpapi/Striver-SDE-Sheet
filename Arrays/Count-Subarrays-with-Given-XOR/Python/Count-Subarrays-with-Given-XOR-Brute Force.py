class Solution:
    def subarrayXor(self, arr: list[int], m: int) -> int:
        n = len(arr)
        count = 0

        for i in range(n):
            xr = 0

            for j in range(i, n):
                xr ^= arr[j]

                if xr == m:
                    count += 1

        return count