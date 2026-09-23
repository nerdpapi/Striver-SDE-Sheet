/**
 * Problem: Longest Consecutive Sequence
 * Approach: Better - Sorting
 *
 * Sort the array and track consecutive elements.
 * Duplicates are ignored.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) auxiliary
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let lastSmallest = -Infinity;
    let longest = 0;
    let count = 0;

    for (const num of nums) {
        if (num - 1 === lastSmallest) {
            count++;
            lastSmallest = num;
        } else if (num !== lastSmallest) {
            count = 1;
            lastSmallest = num;
        }

        longest = Math.max(longest, count);
    }

    return longest;
};