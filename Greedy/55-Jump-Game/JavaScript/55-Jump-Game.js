
/*
 * Problem: 455. Assign Cookies
 * Approach: Optimal - Sorting + Greedy + Two Pointers
 *
 * Time Complexity: O(n log n + m log m)
 * Space Complexity: O(1) auxiliary space, excluding sorting
 */

var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let left = 0;
    let right = 0;

    while (left < s.length && right < g.length) {
        if (s[left] >= g[right]) {
            right++;
        }

        left++;
    }

    return right;
};
