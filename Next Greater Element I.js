/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    let stack = [];
    for(let i=0; i<nums2.length; i++) {

        if(stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            map.set(stack.pop(), nums2[i]);
        }

    stack.push(nums2[i]);    
    }
    // console.log(map);
    // console.log(stack);
    let result = [];
    for(let i=0; i<nums1.length; i++) {
        result.push(map.get(nums1[i]) || -1);
    }
    // console.log(result);
    return result;

};


const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
const ans = nextGreaterElement(nums1, nums2);
console.log(ans);