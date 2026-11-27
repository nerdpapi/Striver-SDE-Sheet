
/*
 * Problem: Shortest Job First (SJF)
 * Approach: Optimal - Greedy + Sorting
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary space, excluding sorting
 */

class Solution {
    solve(bt) {
        bt.sort((a, b) => a - b);

        let n = bt.length;
        let wtTime = 0;
        let time = 0;

        for (let b of bt) {
            wtTime += time;
            time += b;
        }

        return Math.floor(wtTime / n);
    }
}
