/**
 * Problem: 410. Split Array Largest Sum
 * Approach: Brute Force — Linear Search on Answer
 * Time Complexity: O(n * (sum(nums) - max(nums) + 1))
 * Space Complexity: O(1)
 */

var splitArray = function(nums, k) {
    const n = nums.length;

    function cntSub(nums, maxSum) {
        let subArr = 1;
        let currSum = 0;

        for (let i = 0; i < n; i++) {
            if (currSum + nums[i] > maxSum) {
                subArr++;
                currSum = nums[i];
            } else {
                currSum += nums[i];
            }
        }

        return subArr;
    }

    let low = Math.max(...nums);
    let high = nums.reduce((sum, num) => sum + num, 0);

    for (let maxSum = low; maxSum <= high; maxSum++) {
        if (cntSub(nums, maxSum) <= k) {
            return maxSum;
        }
    }

    return -1;
};