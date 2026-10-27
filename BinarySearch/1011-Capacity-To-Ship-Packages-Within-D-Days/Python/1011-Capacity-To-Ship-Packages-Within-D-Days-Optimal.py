"""
Problem: 1011. Capacity To Ship Packages Within D Days
Approach: Binary Search on Answer
Time Complexity: O(n * log(sum(weights) - max(weights) + 1))
Space Complexity: O(1)
"""
class Solution:
    def shipWithinDays(self, weights: list[int], days: int) -> int:
        n = len(weights)

        def totalDays(weights, cap):
            days = 1
            load = 0

            for i in range(n):
                if load + weights[i] > cap:
                    days += 1
                    load = weights[i]
                else:
                    load += weights[i]

            return days

        low = max(weights)
        high = sum(weights)
        ans = -1

        while low <= high:
            mid = (low + high) // 2
            req_days = totalDays(weights, mid)

            if req_days <= days:
                ans = mid
                high = mid - 1
            else:
                low = mid + 1

        return ans