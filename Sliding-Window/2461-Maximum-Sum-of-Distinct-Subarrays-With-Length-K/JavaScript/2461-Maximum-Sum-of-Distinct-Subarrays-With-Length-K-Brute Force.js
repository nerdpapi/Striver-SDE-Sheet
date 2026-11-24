/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const hash = {};

        for (let j = i; j < n; j++) {
            const char = s[j];

            if (hash[char] === 1) break;

            hash[char] = 1;

            const len = j - i + 1;
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
};