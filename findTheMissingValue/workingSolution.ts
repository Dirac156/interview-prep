function firstMissingPositive(nums: number[]): number {
    const sortedArray = nums.sort((a, b) => a > b ? 1 : -1);
    if (!nums.includes(1)) return 1;
    for (let idx = 0; idx < sortedArray.length; idx++) {
        if (sortedArray[idx] > 0) {
            if (sortedArray[idx + 1] - sortedArray[idx] > 1) {
                return sortedArray[idx] + 1
            }
        }
    }
    return sortedArray[sortedArray.length - 1] + 1;
};