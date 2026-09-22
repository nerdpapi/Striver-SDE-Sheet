/**
 * Problem: 18. 4Sum
 * Approach: Brute Force + Set
 *
 * Try every combination of four indices.
 * Sort each valid quadruplet and use a Set to remove duplicates.
 *
 * Time Complexity: O(n^4)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];
    const seen = new Set();
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                for (let l = k + 1; l < n; l++) {
                    const total =
                        nums[i] +
                        nums[j] +
                        nums[k] +
                        nums[l];

                    if (total === target) {
                        const temp = [
                            nums[i],
                            nums[j],
                            nums[k],
                            nums[l]
                        ];

                        temp.sort((a, b) => a - b);

                        const key = temp.join(",");

                        if (!seen.has(key)) {
                            seen.add(key);
                            result.push(temp);
                        }
                    }
                }
            }
        }
    }

    return result;
};