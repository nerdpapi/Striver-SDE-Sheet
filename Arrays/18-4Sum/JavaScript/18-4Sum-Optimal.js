/**
 * Problem: 18. 4Sum
 * Approach: Optimal - Sorting + Two Pointers
 *
 * Sort the array.
 * Fix the first two elements and use two pointers
 * for the remaining two elements.
 *
 * Skip duplicates at every level.
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1) auxiliary
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const n = nums.length;
    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            let left = j + 1;
            let right = n - 1;

            while (left < right) {
                const totalSum =
                    nums[i] +
                    nums[j] +
                    nums[left] +
                    nums[right];

                if (totalSum === target) {
                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    while (
                        left < right &&
                        nums[left] === nums[left - 1]
                    ) {
                        left++;
                    }

                    while (
                        left < right &&
                        nums[right] === nums[right + 1]
                    ) {
                        right--;
                    }

                } else if (totalSum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
};