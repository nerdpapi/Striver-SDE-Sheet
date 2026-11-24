
/*
 * Problem: First Negative Integer in Every Window of Size K
 * Approach: Optimal - Sliding Window + Queue of Negative Indices
 *
 * Time Complexity: O(n) amortized
 * Space Complexity: O(k)
 */

var firstNegInt = function(arr, k) {
    let n = arr.length;
    let negatives = [];
    let head = 0;

    let result = [];
    let left = 0;

    for (let right = 0; right < n; right++) {

        if (arr[right] < 0) {
            negatives.push(right);
        }

        if (right - left + 1 === k) {

            if (head < negatives.length) {
                result.push(arr[negatives[head]]);
            } else {
                result.push(0);
            }

            if (head < negatives.length && negatives[head] === left) {
                head++;
            }

            left++;

            // Periodically remove expired queue entries.
            if (head > k) {
                negatives = negatives.slice(head);
                head = 0;
            }
        }
    }

    return result;
};
