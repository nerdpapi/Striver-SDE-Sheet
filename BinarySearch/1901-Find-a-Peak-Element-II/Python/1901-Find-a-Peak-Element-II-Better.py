"""
Problem: K-th Element of Two Sorted Arrays
Approach: Merge Until K-th Element
Time Complexity: O(k)
Space Complexity: O(1)
"""

class Solution:
    def kthElement(self, a, b, k):
        n1 = len(a)
        n2 = len(b)

        i = 0
        j = 0
        count = 0
        kth = -1

        while i < n1 and j < n2:
            if a[i] <= b[j]:
                kth = a[i]
                i += 1
            else:
                kth = b[j]
                j += 1

            count += 1

            if count == k:
                return kth

        while i < n1:
            kth = a[i]
            i += 1
            count += 1

            if count == k:
                return kth

        while j < n2:
            kth = b[j]
            j += 1
            count += 1

            if count == k:
                return kth

        return kth