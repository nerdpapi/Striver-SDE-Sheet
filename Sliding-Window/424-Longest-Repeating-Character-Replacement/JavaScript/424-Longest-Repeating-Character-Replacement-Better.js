/*
 * Problem: Number of Substrings Containing All Three Characters
 * Approach: Sliding Window + Frequency Map
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var numberOfSubstrings = function(s) {
    let count = {
        'a': 0,
        'b': 0,
        'c': 0
    };

    let left = 0;
    let ans = 0;
    let n = s.length;

    for (let right = 0; right < n; right++) {
        count[s[right]]++;

        while (count['a'] > 0 && count['b'] > 0 && count['c'] > 0) {
            ans += n - right;

            count[s[left]]--;
            left++;
        }
    }

    return ans;
};