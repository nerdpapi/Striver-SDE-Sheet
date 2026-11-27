
"""
*
* Problem: Shortest Job First (SJF)
* Approach: Optimal - Greedy + Sorting
*
* Time Complexity: O(n log n)
* Space Complexity: O(1) auxiliary space, excluding sorting
*
"""

class Solution:
    def solve(self, bt):
        bt.sort()

        n = len(bt)
        wtTime = 0
        time = 0

        for b in bt:
            wtTime += time
            time += b

        return wtTime // n
