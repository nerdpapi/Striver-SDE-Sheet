var subarrayXor = function(arr, m) {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        let xr = 0;

        for (let j = i; j < n; j++) {
            xr ^= arr[j];

            if (xr === m) {
                count++;
            }
        }
    }

    return count;
};