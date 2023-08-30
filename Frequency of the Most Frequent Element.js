/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    
    nums.sort((a,b)=>a-b);
    let left = 0, right = 0, mFreq = 0;
    let sum = 0;

    for(let right=0; right<nums.length; right++) {
        sum += nums[right];
        
        while(nums[right]*(right-left+1) > sum+k) {
            sum -= nums[left];
            left++;
        }
        mFreq = Math.max(mFreq, (right-left+1));
    }
    return mFreq;
};