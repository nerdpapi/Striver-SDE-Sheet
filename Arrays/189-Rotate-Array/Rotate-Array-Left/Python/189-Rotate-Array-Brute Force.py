
"""
Problem: Rotate Array — Left Rotation
Approach: Brute Force using Temporary Array
Time Complexity: O(n)
Space Complexity: O(k)
"""

def leftRotate(nums: list[int], k: int) -> None:
    n = len(nums)
    if n == 0:
        return

    k %= n
    temp = []

    for i in range(k):
        temp.append(nums[i])

    for i in range(k, n):
        nums[i - k] = nums[i]

    for i in range(k):
        nums[n - k + i] = temp[i]
