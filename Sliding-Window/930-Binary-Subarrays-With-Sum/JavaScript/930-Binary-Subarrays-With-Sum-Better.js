/*
 * Problem: Longest Repeating Character Replacement
 * Approach: Sliding Window + Frequency Array (While)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(26) = O(1)
 */

var characterReplacement = function(s, k) {
    let maxLen = 0;
    let n = s.length;

    let left = 0;
    let hash_arr = new Array(26).fill(0);
    let maxFrq = 0;

    for (let right = 0; right < n; right++) {
        let index = s.charCodeAt(right) - 65;

        hash_arr[index]++;
        maxFrq = Math.max(maxFrq, hash_arr[index]);

        while ((right - left + 1) - maxFrq > k) {
            let leftIndex = s.charCodeAt(left) - 65;

            hash_arr[leftIndex]--;
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};