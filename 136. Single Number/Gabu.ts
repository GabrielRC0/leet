function singleNumber(nums: number[]): number {
    const a = nums.filter((v, i) => nums.indexOf(v) !== i)

    const uni = nums.filter(n => !a.includes(n))

    return uni[0]
};

//or

function singleNumber2(nums: number[]): number {
    let outputArray = Array.from(new Set(nums))
    let duplicates = []

    const tempArray = [...nums].sort()

    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i + 1] === tempArray[i]) {
            duplicates.push(tempArray[i])
        }
    }
    console.log(duplicates)
    console.log(outputArray)

    const uni = outputArray.filter(n => !duplicates.includes(n))

    return uni[0]
};

//https://leetcode.com/problems/single-number/submissions/1404153307
//https://leetcode.com/problems/single-number/submissions/1404171381