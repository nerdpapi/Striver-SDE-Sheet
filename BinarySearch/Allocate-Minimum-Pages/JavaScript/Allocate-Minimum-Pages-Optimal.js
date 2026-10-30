/**
 * Problem: Allocate Minimum Pages
 * Approach: Binary Search on Answer
 * Time Complexity: O(n * log(sum(arr) - max(arr) + 1))
 * Space Complexity: O(1)
 */

class Solution {
    findPages(arr, k) {
        const n = arr.length;

        if (k > n) {
            return -1;
        }

        function cntStd(arr, pages) {
            let stds = 1;
            let page = 0;

            for (let i = 0; i < n; i++) {
                if (page + arr[i] <= pages) {
                    page += arr[i];
                } else {
                    stds++;
                    page = arr[i];
                }
            }

            return stds;
        }

        let ans = -1;
        let low = Math.max(...arr);
        let high = arr.reduce((sum, value) => sum + value, 0);

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let totalStd = cntStd(arr, mid);

            if (totalStd <= k) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return ans;
    }
}