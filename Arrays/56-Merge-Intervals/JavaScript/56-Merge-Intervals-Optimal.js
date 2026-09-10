/**
 * Problem: 56. Merge Intervals
 * Approach: Optimal - Sorting + Greedy
 *
 * Sort intervals by their starting point.
 *
 * For every interval:
 * - If it does not overlap with the last merged interval,
 *   add it to the answer.
 * - Otherwise, extend the end of the last merged interval.
 *
 * Brute Force:
 * Sort the intervals and for every interval scan forward
 * to merge all overlapping intervals.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        return a[1] - b[1];
    });

    const n = intervals.length;
    const ans = [];

    for (let i = 0; i < n; i++) {
        if (
            ans.length === 0 ||
            intervals[i][0] > ans[ans.length - 1][1]
        ) {
            ans.push(intervals[i]);
        } else {
            ans[ans.length - 1][1] = Math.max(
                ans[ans.length - 1][1],
                intervals[i][1]
            );
        }
    }

    return ans;
};