/**
 * Problem: 18. 4Sum
 * Approach: Better - HashSet
 *
 * Fix i and j.
 * For every k, calculate the required fourth element.
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const seenFour = new Set();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const seen = new Set();

            for (let k = j + 1; k < n; k++) {
                const fourth =
                    target - nums[i] - nums[j] - nums[k];

                if (seen.has(fourth)) {
                    const temp = [
                        nums[i],
                        nums[j],
                        nums[k],
                        fourth
                    ];

                    temp.sort((a, b) => a - b);

                    const key = temp.join(",");

                    if (!seenFour.has(key)) {
                        seenFour.add(key);
                        result.push(temp);
                    }
                }

                seen.add(nums[k]);
            }
        }
    }

    return result;
};