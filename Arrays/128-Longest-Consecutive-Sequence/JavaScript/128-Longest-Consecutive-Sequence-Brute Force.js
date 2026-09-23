/**
 * Problem: Longest Consecutive Sequence
 * Approach: Brute Force
 *
 * For every number, repeatedly check whether the next consecutive
 * number exists using linear search.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest = 0;

    for (const num of nums) {
        let x = num;
        let count = 1;

        while (nums.includes(x + 1)) {
            x++;
            count++;
        }

        longest = Math.max(longest, count);
    }

    return longest;
};