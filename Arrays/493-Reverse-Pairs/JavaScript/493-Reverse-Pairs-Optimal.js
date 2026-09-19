/**
 * Problem: 493. Reverse Pairs
 * Approach: Optimal - Merge Sort + Two Pointers
 *
 * Count pairs where:
 *     nums[i] > 2 * nums[j]
 *     i < j
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {

    function countPairs(low, mid, high) {
        let count = 0;
        let right = mid + 1;

        for (let i = low; i <= mid; i++) {
            while (
                right <= high &&
                nums[i] > 2 * nums[right]
            ) {
                right++;
            }

            count += right - (mid + 1);
        }

        return count;
    }

    function merge(low, mid, high) {
        const temp = [];

        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.push(nums[left]);
                left++;
            } else {
                temp.push(nums[right]);
                right++;
            }
        }

        while (left <= mid) {
            temp.push(nums[left]);
            left++;
        }

        while (right <= high) {
            temp.push(nums[right]);
            right++;
        }

        for (let i = 0; i < temp.length; i++) {
            nums[low + i] = temp[i];
        }
    }

    function mergeSort(low, high) {
        if (low >= high) {
            return 0;
        }

        const mid = Math.floor((low + high) / 2);

        let count = 0;

        count += mergeSort(low, mid);
        count += mergeSort(mid + 1, high);

        count += countPairs(low, mid, high);

        merge(low, mid, high);

        return count;
    }

    return mergeSort(0, nums.length - 1);
};