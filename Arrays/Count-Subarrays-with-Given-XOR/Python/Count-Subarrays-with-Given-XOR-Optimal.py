from collections import defaultdict

class Solution:
    def subarrayXor(self, arr: list[int], m: int) -> int:
        count = 0
        xr = 0

        freq = defaultdict(int)
        freq[0] = 1

        for num in arr:
            xr ^= num

            if (xr ^ m) in freq:
                count += freq[xr ^ m]

            freq[xr] += 1

        return count