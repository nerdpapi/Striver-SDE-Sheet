var totalFruit = function(fruits) {
    let maxLen = 0;
    let n = fruits.length;

    let f_type = new Map();
    let left = 0;

    for (let right = 0; right < n; right++) {
        let fruit = fruits[right];

        f_type.set(fruit, (f_type.get(fruit) || 0) + 1);

        while (f_type.size > 2) {
            let leftFruit = fruits[left];

            f_type.set(leftFruit, f_type.get(leftFruit) - 1);

            if (f_type.get(leftFruit) === 0) {
                f_type.delete(leftFruit);
            }

            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};