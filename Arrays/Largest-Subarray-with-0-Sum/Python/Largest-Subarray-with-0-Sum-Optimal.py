"""
Problem: Largest Subarray with 0 Sum
Approach: Optimal - Prefix Sum + HashMap

If the same prefix sum occurs at two indices,
the elements between those indices have sum zero.

Store only the first occurrence of each prefix sum
to maximize the subarray length.

Time Complexity: O(n)
Space Complexity: O(n)
"""

class Solution:
    def maxLength(self, arr: list[int]) -> int:
        first_seen = {}
        longest = 0
        prefix = 0

        for i in range(len(arr)):
            prefix += arr[i]

            if prefix == 0:
                longest = i + 1

            elif prefix in first_seen:
                longest = max(longest, i - first_seen[prefix])

            else:
                first_seen[prefix] = i

        return longest