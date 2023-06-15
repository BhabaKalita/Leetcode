/*
var nextPermutation = function(nums) {
    let result = [];

    function backtrack(i,nums) {
        if(i == nums.length) {
            result.push(nums.slice())
        }
        for(let j=i; j<nums.length; j++) {
            [nums[i],nums[j]] = [nums[j],nums[i]];
            backtrack(i+1,nums);
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }
    backtrack(0,nums);
    let res = result.sort();
    return res;
};

let nums = [3,2,1];
console.log(nextPermutation(nums));
*/
/*
function nextPermutation(nums) {

    let i = nums.length - 2;

    while(i>=0 && nums[i] >= nums[i+1]) {
        i--;
    }
    if(i >= 0) {
        let j = nums.length - 1;
        while(j > 0 && nums[i] >= nums[j]) {
            j--;
        }
        swap(nums,i,j);
        // [nums[i],nums[j]] = [nums[j],nums[i]];

    }
   reverse(nums,i+1);
//    return nums;
}

function swap(nums,i,j) {
    [nums[i],nums[j]] = [nums[j],nums[i]];
    // let temp = nums[i];
    // nums[i] = nums[j];
    // nums[j] = temp;
}

let reverse = (nums,i) => {
    let j = nums.length -1;
    while(i < j) {
        // [nums[i++],nums[j++]] = [nums[j++],nums[i++]];
        swap(nums,i,j);
    }
}
*/
/*
var nextPermutation = function(nums) {
    
    let i = nums.length - 2;

    while(i >= 0 && nums[i] >= nums[i+1]) {
        i--;
    }
    if(i >= 0) {
        let j = nums.length - 1;
        while(j >= 0 && nums[i] >= nums[j]) {
            j--;
        }
        swap(nums,i,j);
    }
    reverse(nums,i+1);
};

let swap = (nums,i,j) => {
    [nums[i],nums[j]] = [nums[j],nums[i]];
}

let reverse = (nums,i) => {
    let j = nums.length - 1;
    while(i < j) {
        swap(nums,i,j);
    }
}

// let nums = [3,2,1];
// console.log(nextPermutation(nums));
let nums = [1, 1, 3];
nextPermutation(nums);
console.log(nums); // prints [1, 3, 2]
*/
/**
 * ALGO:
 * Find the peak number
 * Next largest number to the right of the peak
 * flip peak - 1 and largest number to the right peak
 * reverse from peak to end of the err
 */

function nextPermutation(nums) {
    let peak;

    for(let i=nums.length; i>=0; i--) {
        if(nums[i] > nums[i-1]) {
            peak = i;
            break;
        }
        if(i == 0) {
            peak = 0;
        }
    }

    for(let j = nums.length-1; j >= 0; j--) {
        if(nums[peak-1] < nums[j]) {
            // swap(nums, nums[peak-1],nums[j]);
            [nums[peak-1],nums[j]] = [nums[j],nums[peak-1]];
            break;
        }
    }
    // reverse(nums,nums[peak+1]);
    let start = peak;
    let end = nums.length - 1;

    while(start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
    return nums;
}
let nums = [1, 5, 8, 4, 7, 6, 5, 3, 1];
// let nums = [1, 1, 3];
console.log(nextPermutation(nums));
// console.log(nums); // prints [1, 3, 2]