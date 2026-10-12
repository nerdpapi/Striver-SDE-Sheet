/**
 * Problem: 1781. Sum of Beauty of All Substrings
 * Approach: Brute Force + Frequency Map
 *
 * Time Complexity: O(n^2 * 26)
 * Space Complexity: O(26)
 */

/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let total = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const freq = new Map();

        for (let j = i; j < n; j++) {
            const ch = s[j];
            freq.set(ch, (freq.get(ch) || 0) + 1);

            let maxFreq = 0;
            let minFreq = Infinity;

            for (const count of freq.values()) {
                maxFreq = Math.max(maxFreq, count);
                minFreq = Math.min(minFreq, count);
            }

            total += maxFreq - minFreq;
        }
    }

    return total;
};