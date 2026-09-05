/**
 * Problem: 31. Next Permutation
 * Approach: Optimal - Breakpoint + Swap + Reverse
 *
 * 1. Find the first index from the right where nums[i] < nums[i + 1].
 * 2. Find the first element from the right greater than nums[i].
 * 3. Swap them.
 * 4. Reverse the suffix.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} nums
 * @return {void}
 */

var nextPermutation = function(nums) {
    const n = nums.length;

    // Step 1: Find the breakpoint
    let idx = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            idx = i;
            break;
        }
    }

    // No breakpoint means this is the largest permutation
    if (idx === -1) {
        nums.reverse();
        return;
    }

    // Step 2: Find the element just greater than nums[idx]
    for (let i = n - 1; i > idx; i--) {
        if (nums[i] > nums[idx]) {
            [nums[idx], nums[i]] = [nums[i], nums[idx]];
            break;
        }
    }

    // Step 3: Reverse the suffix
    let left = idx + 1;
    let right = n - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];

        left++;
        right--;
    }
};