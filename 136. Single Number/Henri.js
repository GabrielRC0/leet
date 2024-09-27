const nums = [2, 2, 1, 4, 1, 4, 5, 5, 7, 8, 9, 8, 9];

function findUniq(nums) {
    let arrSort = nums.sort((a, b) => a - b);
    let uniq = [];
    for (let i = 0; i < arrSort.length; i++) {
        if (arrSort[i] !== arrSort[i - 1] && arrSort[i] !== arrSort[i + 1]) {
            uniq.push(arrSort[i]);
        }
    }
    return uniq[0];
}

console.log(findUniq(nums));
