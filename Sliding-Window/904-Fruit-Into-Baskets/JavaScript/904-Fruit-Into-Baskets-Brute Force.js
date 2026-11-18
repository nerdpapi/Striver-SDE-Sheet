var totalFruit = function(fruits) {
    let maxLen = 0;
    let n = fruits.length;

    for (let i = 0; i < n; i++) {
        let f_type = new Set();

        for (let j = i; j < n; j++) {
            f_type.add(fruits[j]);

            if (f_type.size <= 2) {
                let length = j - i + 1;
                maxLen = Math.max(maxLen, length);
            } else {
                break;
            }
        }
    }

    return maxLen;
};