/**
 * Problem: Count Inversions
 * Approach: Optimal - Merge Sort
 *
 * While merging two sorted halves, if an element from the
 * right half is smaller than an element from the left half,
 * it forms inversions with all remaining elements in the left half.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    inversionCount(arr) {

        function mergeSort(left, right) {
            if (left >= right) {
                return 0;
            }

            const mid = Math.floor((left + right) / 2);

            let count = 0;

            count += mergeSort(left, mid);
            count += mergeSort(mid + 1, right);
            count += merge(left, mid, right);

            return count;
        }

        function merge(left, mid, right) {
            const temp = [];

            let i = left;
            let j = mid + 1;
            let count = 0;

            while (i <= mid && j <= right) {

                if (arr[i] <= arr[j]) {
                    temp.push(arr[i]);
                    i++;
                } else {
                    temp.push(arr[j]);

                    // arr[i...mid] are all greater than arr[j]
                    count += mid - i + 1;
                    j++;
                }
            }

            while (i <= mid) {
                temp.push(arr[i]);
                i++;
            }

            while (j <= right) {
                temp.push(arr[j]);
                j++;
            }

            for (let k = 0; k < temp.length; k++) {
                arr[left + k] = temp[k];
            }

            return count;
        }

        return mergeSort(0, arr.length - 1);
    }
}