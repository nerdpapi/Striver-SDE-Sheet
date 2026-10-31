/**
 * Problem: 410. Split Array Largest Sum
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(sum(nums) - max(nums) + 1))
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
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (cntSub(nums, mid) <= k) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};