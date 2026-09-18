/**
 * Problem: 229. Majority Element II
 * Approach: Optimal - Extended Moore's Voting Algorithm
 *
 * There can be at most two elements occurring more than n / 3 times.
 *
 * Phase 1:
 * Find two potential candidates.
 *
 * Phase 2:
 * Verify their actual frequencies.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) excluding output
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const n = nums.length;

    let count1 = 0;
    let count2 = 0;

    let el1 = null;
    let el2 = null;

    // Phase 1: Find candidates
    for (const num of nums) {
        if (count1 === 0 && num !== el2) {
            el1 = num;
            count1 = 1;
        } else if (count2 === 0 && num !== el1) {
            el2 = num;
            count2 = 1;
        } else if (num === el1) {
            count1++;
        } else if (num === el2) {
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    // Phase 2: Verify candidates
    count1 = 0;
    count2 = 0;

    for (const num of nums) {
        if (num === el1) {
            count1++;
        }

        if (num === el2) {
            count2++;
        }
    }

    const result = [];

    if (count1 > n / 3) {
        result.push(el1);
    }

    if (count2 > n / 3) {
        result.push(el2);
    }

    return result;
};