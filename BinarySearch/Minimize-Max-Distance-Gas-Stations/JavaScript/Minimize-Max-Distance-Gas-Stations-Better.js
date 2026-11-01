/**
 * Problem: Minimize Max Distance of Adjacent Gas Stations
 * Approach: Max Heap / Priority Queue
 * Time Complexity: O(n + k * log n)
 * Space Complexity: O(n)
 */

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent].length >= this.heap[i].length) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
                [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;
        const n = this.heap.length;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (
                left < n &&
                this.heap[left].length > this.heap[largest].length
            ) {
                largest = left;
            }

            if (
                right < n &&
                this.heap[right].length > this.heap[largest].length
            ) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] =
                [this.heap[largest], this.heap[i]];

            i = largest;
        }

        return max;
    }

    peek() {
        return this.heap[0];
    }
}

class Solution {
    minMaxDist(stations, k) {
        const n = stations.length;
        const howMany = new Array(n - 1).fill(0);

        const pq = new MaxHeap();

        for (let i = 0; i < n - 1; i++) {
            let gap = stations[i + 1] - stations[i];

            pq.push({
                length: gap,
                index: i
            });
        }

        for (let i = 0; i < k; i++) {
            let largestGap = pq.pop();
            let index = largestGap.index;

            howMany[index]++;

            let originalGap = stations[index + 1] - stations[index];
            let newGap = originalGap / (howMany[index] + 1);

            pq.push({
                length: newGap,
                index: index
            });
        }

        return pq.peek().length;
    }
}