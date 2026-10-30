/**
 * Problem: Allocate Minimum Pages
 * Approach: Brute Force — Check Every Page Limit
 * Time Complexity: O(n * (sum(arr) - max(arr) + 1))
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

        let low = Math.max(...arr);
        let high = arr.reduce((sum, value) => sum + value, 0);

        for (let pages = low; pages <= high; pages++) {
            let totalStd = cntStd(arr, pages);

            if (totalStd <= k) {
                return pages;
            }
        }

        return -1;
    }
}