function firstMissingPositive(nums: number[]): number {
    if (!nums.includes(1)) return 1;
    let missingValue = Infinity;
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] + 1 !== missingValue && missingValue > nums[i] + 1 && !nums.includes(nums[i] + 1)) { 
           if (nums[i] + 1 > 0) 
               missingValue = nums[i] + 1;
       }
    }
    return missingValue;
};