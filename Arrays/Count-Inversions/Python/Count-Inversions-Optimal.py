"""
Problem: Count Inversions
Approach: Optimal - Merge Sort

While merging two sorted halves, if an element from the
right half is smaller than an element from the left half,
it forms inversions with all remaining elements in the left half.

Time Complexity: O(n log n)
Space Complexity: O(n)
"""


class Solution:
    def inversionCount(self, arr: list[int]) -> int:

        def merge_sort(left, right):
            if left >= right:
                return 0

            mid = (left + right) // 2

            count = 0

            count += merge_sort(left, mid)
            count += merge_sort(mid + 1, right)
            count += merge(left, mid, right)

            return count

        def merge(left, mid, right):
            temp = []
            i = left
            j = mid + 1
            count = 0

            while i <= mid and j <= right:

                if arr[i] <= arr[j]:
                    temp.append(arr[i])
                    i += 1

                else:
                    temp.append(arr[j])

                    # arr[i...mid] are all greater than arr[j]
                    count += mid - i + 1
                    j += 1

            while i <= mid:
                temp.append(arr[i])
                i += 1

            while j <= right:
                temp.append(arr[j])
                j += 1

            for k in range(len(temp)):
                arr[left + k] = temp[k]

            return count

        return merge_sort(0, len(arr) - 1)