"""
Problem: 88. Merge Sorted Array
Approach: Optimal - Three Pointers from the End

Use three pointers:
i -> last actual element of nums1
j -> last element of nums2
k -> last position of nums1

Place the larger element at position k and move backwards.

Time Complexity: O(m + n)
Space Complexity: O(1)
"""


class Solution:
    def merge(self, nums1: list[int], m: int,
              nums2: list[int], n: int) -> None:

        i = m - 1
        j = n - 1
        k = m + n - 1

        while j >= 0:

            if i >= 0 and nums1[i] > nums2[j]:
                nums1[k] = nums1[i]
                i -= 1

            else:
                nums1[k] = nums2[j]
                j -= 1

            k -= 1