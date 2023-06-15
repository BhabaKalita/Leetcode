
function twoSum(nums, target) {

    for(let i=0; i<nums.length-1; i++) {
        for(let j=i+1; j<=nums.length; j++) {
            console.log(i,j);
            if(nums[i]+nums[j] === target) {
                return [i,j];
            }
        }
    }
    return -1;
}
// let num = [2,5,5,11], target = 10;
// console.log(twoSum(num, target))

function twoSum1(nums, target) {
    const indices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      
      if (indices.has(complement)) {
        return [indices.get(complement), i];
      }
      
      indices.set(nums[i], i);
    }
    
    throw new Error('No two sum solution');
  }

//   let num = [2,5,5,11], target = 10;
// console.log(twoSum(num, target))
  
function twoSum2(nums, target) {
    // let comp = new Map();
    let comp = {};

    let numsLength = nums.length;
    for(let i=0; i<numsLength; i++) {
        if(comp[nums[i]] !== undefined) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
        // console.log(comp[nums[i]],i);
    }
    console.log('comp->',comp);
}

// let num = [2,5,5,11], target = 13;
// console.log(twoSum2(num, target))

function twoSum3(nums,target) {

    let comp = new Map();
    let numsLength = nums.length;
    for(let i=0; i<numsLength; i++) {
        let complement = target - nums[i];
        // console.log();
        if(comp.has(complement)) {
            return [comp.get(complement),i];
        }
        comp.set(nums[i],i);
        // comp[target-nums[i]] = i;
    }
    console.log(comp);

}
let num = [2,5,5,11], target = 16;
console.log(twoSum3(num, target))