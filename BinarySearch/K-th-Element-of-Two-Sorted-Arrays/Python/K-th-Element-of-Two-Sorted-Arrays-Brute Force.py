"""
Problem: K-th Element of Two Sorted Arrays
Approach: Brute Force — Merge Both Arrays
Time Complexity: O(n1 + n2)
Space Complexity: O(n1 + n2)
"""

class Solution:
    def kthElement(self, a, b, k):
        n1 = len(a)
        n2 = len(b)

        merged = []
        i = 0
        j = 0

        while i < n1 and j < n2:
            if a[i] <= b[j]:
                merged.append(a[i])
                i += 1
            else:
                merged.append(b[j])
                j += 1

        while i < n1:
            merged.append(a[i])
            i += 1

        while j < n2:
            merged.append(b[j])
            j += 1

        return merged[k - 1]