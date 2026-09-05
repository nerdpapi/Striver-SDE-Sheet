"""
1. Brute Force

### Idea

Generate all permutations, sort them lexicographically, find the current permutation,
 and return the next permutation.

This is mainly useful for understanding the problem. It is far too expensive for large `n`.

Problem: 31. Next Permutation
Approach: Optimal - Breakpoint + Swap + Reverse

1. Find the first index from the right where nums[i] < nums[i + 1].
2. Find the first element from the right greater than nums[i].
3. Swap them.
4. Reverse the suffix.

Time Complexity: O(n)
Space Complexity: O(1)
"""


class Solution:
    def nextPermutation(self, nums: list[int]) -> None:
        n = len(nums)

        # Step 1: Find the breakpoint
        idx = -1

        for i in range(n - 2, -1, -1):
            if nums[i] < nums[i + 1]:
                idx = i
                break

        # If no breakpoint exists, the array is the
        # largest permutation. Return the smallest permutation.
        if idx == -1:
            nums.reverse()
            return

        # Step 2: Find the element just greater than nums[idx]
        for i in range(n - 1, idx, -1):
            if nums[i] > nums[idx]:
                nums[idx], nums[i] = nums[i], nums[idx]
                break

        # Step 3: Reverse the suffix
        left = idx + 1
        right = n - 1

        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1