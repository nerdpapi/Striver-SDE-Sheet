/*
Problem: Remove Duplicates from Sorted Array
Approach: Brute Force - Temporary Array
Time Complexity: O(n^2)
Space Complexity: O(n)
*/

var removeDuplicates = function(nums) {
    let n = nums.length;
    let temp = [];

    for (let i = 0; i < n; i++) {
        if (!temp.includes(nums[i])) {
            temp.push(nums[i]);
        }
    }

    let k = temp.length;

    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }

    return k;
};