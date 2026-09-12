/**
 * Problem: 287. Find the Duplicate Number
 * Approach: Better - Frequency Array
 *
 * Store the frequency of every number.
 * The first number whose frequency becomes 2 is the duplicate.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    const frequency = new Array(nums.length).fill(0);

    for (const num of nums) {
        frequency[num]++;

        if (frequency[num] === 2) {
            return num;
        }
    }

    return -1;
};