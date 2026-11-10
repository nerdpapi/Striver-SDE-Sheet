/*
Problem: Two Sum II - Input Array Is Sorted
Approach: Brute Force - Nested Loops
Time Complexity: O(n^2)
Space Complexity: O(1)
*/

var twoSum = function(numbers, target) {
    let n = numbers.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }

    return [];
};