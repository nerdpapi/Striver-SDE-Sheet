/*
Problem: Row with Maximum 1s
Approach: Binary Search - Lower Bound
Time Complexity: O(m * log n)
Space Complexity: O(1)
*/

class Solution {
    rowWithMax1s(arr) {
        const m = arr.length;
        const n = arr[0].length;

        const lowerBound = (row, n, x) => {
            let low = 0;
            let high = n - 1;
            let ans = -1;

            while (low <= high) {
                let mid = Math.floor((low + high) / 2);

                if (row[mid] >= x) {
                    ans = mid;
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }

            return ans;
        };

        let count_max = 0;
        let idx = -1;

        for (let i = 0; i < m; i++) {
            let firstOne = lowerBound(arr[i], n, 1);

            let count_one = firstOne === -1 ? 0 : n - firstOne;

            if (count_one > count_max) {
                count_max = count_one;
                idx = i;
            }
        }

        return idx;
    }
}