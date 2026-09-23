/**
 * Problem: Longest Consecutive Sequence
 * Approach: Optimal - HashSet
 *
 * Store all numbers in a Set.
 *
 * Only start a sequence when num - 1 does not exist.
 * Then keep checking num + 1, num + 2, etc.
 *
 * Time Complexity: O(n) average
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
};