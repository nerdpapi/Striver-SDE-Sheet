"""
Problem: 1011. Capacity To Ship Packages Within D Days
Approach: Brute Force — Check Every Capacity
Time Complexity: O(n * (sum(weights) - max(weights) + 1))
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

        wt_sum = sum(weights)

        for cap in range(max(weights), wt_sum + 1):
            req_days = totalDays(weights, cap)

            if req_days <= days:
                return cap

        return -1