/*
 * Problem: Longest Substring With At Most K Distinct Characters
 * Approach: Brute Force + Frequency Map
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(k)
 */

var longestKSubstr = function(s, k) {
    let maxLen = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let freq_map = new Map();

        for (let j = i; j < n; j++) {
            let ch = s[j];

            freq_map.set(ch, (freq_map.get(ch) || 0) + 1);

            if (freq_map.size <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            } else {
                break;
            }
        }
    }

    return maxLen;
};