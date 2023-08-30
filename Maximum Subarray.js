/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];

    for(let i=1; i<nums.length; i++) {

        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};

let nums = [-2,1,-3,4,-1,2,1,-5,4];

let maxi = maxSubArray(nums);
console.log(maxi);