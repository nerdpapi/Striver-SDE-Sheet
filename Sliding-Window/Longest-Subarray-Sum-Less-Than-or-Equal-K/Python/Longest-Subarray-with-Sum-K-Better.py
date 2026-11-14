"""
Problem: Longest Subarray with Sum K
Approach: Better - Prefix Sum + HashMap

Store the first occurrence of every prefix sum.

If prefix_sum - k has appeared before, the elements
between that index and the current index have sum k.

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def longestSubarray(self, arr: list[int], k: int) -> int:
        first_seen = {}
        length = 0
        prefix_sum = 0

        for i in range(len(arr)):
            prefix_sum += arr[i]

            if prefix_sum == k:
                length = i + 1

            if prefix_sum - k in first_seen:
                length = max(
                    length,
                    i - first_seen[prefix_sum - k]
                )

            if prefix_sum not in first_seen:
                first_seen[prefix_sum] = i

        return length