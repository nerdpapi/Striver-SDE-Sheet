/*
Problem: Valid Palindrome
Approach: Brute Force - Clean and Reverse
Time Complexity: O(n)
Space Complexity: O(n)
*/

var isPalindrome = function(s) {
    let cleaned = "";

    for (let ch of s) {
        if (/[a-zA-Z0-9]/.test(ch)) {
            cleaned += ch.toLowerCase();
        }
    }

    return cleaned === cleaned.split("").reverse().join("");
};