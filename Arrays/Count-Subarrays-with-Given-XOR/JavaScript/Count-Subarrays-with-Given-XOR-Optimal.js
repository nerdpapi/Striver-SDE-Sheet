var subarrayXor = function(arr, m) {
    let count = 0;
    let xr = 0;

    const freq = new Map();
    freq.set(0, 1);

    for (const num of arr) {
        xr ^= num;

        if (freq.has(xr ^ m)) {
            count += freq.get(xr ^ m);
        }

        freq.set(xr, (freq.get(xr) || 0) + 1);
    }

    return count;
};