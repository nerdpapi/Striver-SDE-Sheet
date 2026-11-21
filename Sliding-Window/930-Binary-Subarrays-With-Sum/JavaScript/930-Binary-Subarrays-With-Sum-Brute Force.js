/*
 * Problem: Longest Repeating Character Replacement
 * Approach: Brute Force + Frequency Array
 *
 * Time Complexity: O(26 * n^2)
 * Space Complexity: O(26) = O(1)
 */

var characterReplacement = function(s, k) {
    let maxLen = 0;
    let n = s.length;

    for (let i = 0; i < n; i++) {
        let hash_arr = new Array(26).fill(0);
        let maxFrq = 0;

        for (let j = i; j < n; j++) {
            let index = s.charCodeAt(j) - 65;

            hash_arr[index]++;

            maxFrq = Math.max(maxFrq, hash_arr[index]);

            let replacement = (j - i + 1) - maxFrq;

            if (replacement <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            } else {
                break;
            }
        }
    }

    return maxLen;
};