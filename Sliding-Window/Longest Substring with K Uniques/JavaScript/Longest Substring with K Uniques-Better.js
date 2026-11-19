/*
 * Problem: Longest Substring with K Uniques
 * Approach: Sliding Window + Frequency Map (While)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

var longestKSubstr = function(s, k) {
    let maxLen = -1;
    let n = s.length;

    let freq_map = new Map();
    let left = 0;

    for (let right = 0; right < n; right++) {
        let ch = s[right];

        freq_map.set(ch, (freq_map.get(ch) || 0) + 1);

        while (freq_map.size > k) {
            let leftChar = s[left];

            freq_map.set(leftChar, freq_map.get(leftChar) - 1);

            if (freq_map.get(leftChar) === 0) {
                freq_map.delete(leftChar);
            }

            left++;
        }

        if (freq_map.size === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen;
};