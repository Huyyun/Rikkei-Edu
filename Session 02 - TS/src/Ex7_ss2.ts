function twoSum(nums: number[], target: number): number[] {
    let numMap: { [key: number]: number } = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; 
        if (numMap[complement] !== undefined) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }

    return [];
}

let nums = [2, 7, 11, 15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); 
