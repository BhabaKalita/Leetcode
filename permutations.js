var permute = function(nums) {
    
    if(nums.length == '') return [];

    let result = [];
    function backtrack(i,nums) {
        
        if(i == nums.length) {
            result.push(nums.slice());
            return;
        }
        for(let j=i; j<nums.length; j++) {
            [nums[i], nums[j]] = [nums[j],nums[i]];
            backtrack(i+1,nums);
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }

    backtrack(0,nums);
    // return result.filter(( t={}, a=> !(t[a]=a in t) ));
    return result;
};

let nums = [1,1,2]
// console.log(permute(nums));

var permuteUnique = function(nums) {
    
    if(nums.length == 1) return nums;
    let result = [];
    function backtrack(i, nums) {
        if(i == nums.length) {
            result.push(nums.slice());
        }
        for(let j=i; j<nums.length; j++) {
            [nums[i],nums[j]] = [nums[j],nums[i]];
            backtrack(i+1, nums);
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }
    backtrack(0,nums);
    return result.filter(( t={}, a=> !(t[a]=a in t) ));
};
console.log(permuteUnique([1]));