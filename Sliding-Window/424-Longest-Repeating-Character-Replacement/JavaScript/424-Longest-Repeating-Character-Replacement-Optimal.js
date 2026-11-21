/*
 * Problem: Longest Repeating Character Replacement
 * Approach: Optimized Sliding Window + Frequency Map (If)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(26) = O(1)
 */

var characterReplacement = function(s, k) {
    let maxLen = 0;
    let n = s.length;

    let left = 0;
    let freq_map = new Map();
    let maxFrq = 0;

    for (let right = 0; right < n; right++) {
        let ch = s[right];

        freq_map.set(ch, (freq_map.get(ch) || 0) + 1);

        maxFrq = Math.max(maxFrq, freq_map.get(ch));

        if ((right - left + 1) - maxFrq > k) {
            let leftChar = s[left];

            freq_map.set(leftChar, freq_map.get(leftChar) - 1);

            if (freq_map.get(leftChar) === 0) {
                freq_map.delete(leftChar);
            }

            left++;
        }

        if ((right - left + 1) - maxFrq <= k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
    }

    return maxLen;
};