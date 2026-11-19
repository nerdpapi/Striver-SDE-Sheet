/**
 * Problem: Longest Substring With At Most K Distinct Characters
 * Approach: Sliding Window + Frequency Map
 *
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
class Solution {
    longestKSubstr(s, k) {
        let l = 0;
        let r = 0;
        const freqMap = new Map();
        let maxLen = 0;

        while (r < s.length) {
            freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1);

            while (freqMap.size > k) {
                const ch = s[l];
                freqMap.set(ch, freqMap.get(ch) - 1);

                if (freqMap.get(ch) === 0) {
                    freqMap.delete(ch);
                }

                l++;
            }

            if (freqMap.size <= k) {
                maxLen = Math.max(maxLen, r - l + 1);
            }

            r++;
        }

        return maxLen > 0 ? maxLen : -1;
    }
}