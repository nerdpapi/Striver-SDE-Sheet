
"""
Problem: 33. Search in Rotated Sorted Array
Approach: Modified Binary Search
Time Complexity: O(log n)
Space Complexity: O(1)
"""

class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left = 0
        right = len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2

            if nums[mid] == target:
                return mid

            # Left half is sorted
            elif nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1

            # Right half is sorted
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1

        return -1


# Test the solution
if __name__ == "__main__":
    solution = Solution()

    print(solution.search([4, 5, 6, 7, 0, 1, 2], 0))  # Output: 4
    print(solution.search([4, 5, 6, 7, 0, 1, 2], 3))  # Output: -1
    print(solution.search([1], 0))                    # Output: -1
