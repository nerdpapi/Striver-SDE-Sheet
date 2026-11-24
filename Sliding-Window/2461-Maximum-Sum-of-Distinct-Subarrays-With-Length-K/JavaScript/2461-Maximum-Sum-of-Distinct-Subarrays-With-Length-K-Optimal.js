/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    const hashArray = new Array(256).fill(-1);

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right);

        if (hashArray[index] >= left) {
            left = hashArray[index] + 1;
        }

        hashArray[index] = right;

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};