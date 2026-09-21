/**
 * Problem: 15. 3Sum
 * Approach: Brute Force
 *
 * Check every possible triplet.
 * Sort each valid triplet and use a Set to remove duplicates.
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(k), where k is the number of unique triplets
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const n = nums.length;
    const seen = new Set();
    const result = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]];
                    triplet.sort((a, b) => a - b);

                    const key = triplet.join(",");

                    if (!seen.has(key)) {
                        seen.add(key);
                        result.push(triplet);
                    }
                }
            }
        }
    }

    return result;
};