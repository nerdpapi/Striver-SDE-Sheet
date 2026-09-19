"""
Problem: 493. Reverse Pairs
Approach: Optimal - Merge Sort + Two Pointers

First recursively sort both halves.

Before merging, count cross-half reverse pairs:
nums[i] > 2 * nums[j]

Since both halves are sorted, use a pointer on the
right half to count all valid pairs efficiently.

Time Complexity: O(n log n)
Space Complexity: O(n)
"""

class Solution:
    def reversePairs(self, nums: list[int]) -> int:

        def countPairs(low, mid, high):
            count = 0
            right = mid + 1

            for i in range(low, mid + 1):
                while right <= high and nums[i] > 2 * nums[right]:
                    right += 1

                count += right - (mid + 1)

            return count

        def merge(low, mid, high):
            temp = []

            left = low
            right = mid + 1

            while left <= mid and right <= high:
                if nums[left] <= nums[right]:
                    temp.append(nums[left])
                    left += 1
                else:
                    temp.append(nums[right])
                    right += 1

            while left <= mid:
                temp.append(nums[left])
                left += 1

            while right <= high:
                temp.append(nums[right])
                right += 1

            for i in range(len(temp)):
                nums[low + i] = temp[i]

        def mergeSort(low, high):
            if low >= high:
                return 0

            mid = (low + high) // 2

            count = 0

            count += mergeSort(low, mid)
            count += mergeSort(mid + 1, high)
            count += countPairs(low, mid, high)

            merge(low, mid, high)

            return count

        return mergeSort(0, len(nums) - 1)