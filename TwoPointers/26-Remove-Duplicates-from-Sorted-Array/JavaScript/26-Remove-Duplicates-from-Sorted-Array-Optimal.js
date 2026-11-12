/*
Problem: Remove Duplicates from Sorted Array
Approach: Two Pointers - In-Place
Time Complexity: O(n)
Space Complexity: O(1)
*/

var removeDuplicates = function(nums) {
    let n = nums.length;

    if (n === 0) return 0;

    let j = 0;

    for (let i = 1; i < n; i++) {
        if (nums[j] !== nums[i]) {
            j++;
            nums[j] = nums[i];
        }
    }

    return j + 1;
};