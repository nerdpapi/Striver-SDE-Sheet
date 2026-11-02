"""
Problem: 4. Median of Two Sorted Arrays
Approach: Brute Force — Merge Two Sorted Arrays
Time Complexity: O(n1 + n2)
Space Complexity: O(n1 + n2)
"""

class Solution:
    def findMedianSortedArrays(
        self, nums1: list[int], nums2: list[int]
    ) -> float:
        n1 = len(nums1)
        n2 = len(nums2)

        nums3 = []
        n = n1 + n2

        i = 0
        j = 0

        while i < n1 and j < n2:
            if nums1[i] < nums2[j]:
                nums3.append(nums1[i])
                i += 1
            else:
                nums3.append(nums2[j])
                j += 1

        while i < n1:
            nums3.append(nums1[i])
            i += 1

        while j < n2:
            nums3.append(nums2[j])
            j += 1

        if n % 2 == 1:
            return nums3[n // 2]

        return (nums3[n // 2] + nums3[n // 2 - 1]) / 2