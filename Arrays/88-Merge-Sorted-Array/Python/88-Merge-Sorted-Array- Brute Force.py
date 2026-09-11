"""
Problem: 88. Merge Sorted Array
Approach: Brute Force

Copy nums2 into the unused portion of nums1,
then sort the entire array.

Time Complexity: O((m + n) log(m + n))
Space Complexity: O(1) auxiliary
"""


class Solution:
    def merge(self, nums1: list[int], m: int,
              nums2: list[int], n: int) -> None:

        nums1[m:] = nums2
        nums1.sort()