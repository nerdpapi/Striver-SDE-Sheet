"""
Problem: 4. Median of Two Sorted Arrays
Approach: Merge Until Median Positions
Time Complexity: O(n1 + n2)
Space Complexity: O(1)
"""

class Solution:
    def findMedianSortedArrays(
        self, nums1: list[int], nums2: list[int]
    ) -> float:
        n1 = len(nums1)
        n2 = len(nums2)
        n = n1 + n2

        idx1 = n // 2 - 1
        idx2 = n // 2

        ele1 = -1
        ele2 = -2

        count = 0
        i = 0
        j = 0

        while i < n1 and j < n2:
            if nums1[i] < nums2[j]:
                if count == idx1:
                    ele1 = nums1[i]

                if count == idx2:
                    ele2 = nums1[i]

                count += 1
                i += 1

            else:
                if count == idx1:
                    ele1 = nums2[j]

                if count == idx2:
                    ele2 = nums2[j]

                count += 1
                j += 1

        while i < n1:
            if count == idx1:
                ele1 = nums1[i]

            if count == idx2:
                ele2 = nums1[i]

            count += 1
            i += 1

        while j < n2:
            if count == idx1:
                ele1 = nums2[j]

            if count == idx2:
                ele2 = nums2[j]

            count += 1
            j += 1

        if n % 2 == 1:
            return ele2

        return (ele1 + ele2) / 2