/**
 * Problem: 169. Majority Element
 * Approach: Optimal - Moore's Voting Algorithm
 *
 * Phase 1:
 * Find a potential majority candidate using voting.
 *
 * Phase 2:
 * Verify that the candidate actually appears more than n / 2 times.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let el = nums[0];

    // Phase 1: Find candidate
    for (const num of nums) {
        if (count === 0) {
            el = num;
            count = 1;
        } else if (num === el) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Verify candidate
    let count2 = 0;

    for (const num of nums) {
        if (num === el) {
            count2++;
        }
    }

    if (count2 > nums.length / 2) {
        return el;
    }

    return -1;
};