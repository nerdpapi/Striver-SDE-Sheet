/**
 * Problem: 56. Merge Intervals
 * Approach: Brute Force
 *
 * Sort intervals by start time.
 * For every interval, scan the following intervals and merge
 * all overlapping intervals.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n) for the output
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
        let start = intervals[i][0];
        let end = intervals[i][1];

        // Already completely covered
        if (ans.length > 0 && end <= ans[ans.length - 1][1]) {
            continue;
        }

        for (let j = i + 1; j < n; j++) {
            if (intervals[j][0] <= end) {
                end = Math.max(end, intervals[j][1]);
            } else {
                break;
            }
        }

        ans.push([start, end]);
    }

    return ans;
};