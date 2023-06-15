var subsets = function(nums) {
  /**
   * return the subset as 2d matrix */  
  let result = [];

  function backtrack(i,nums,slate) {
    if(i === nums.length) {
        result.push(slate.slice());
        return;
    }

    // exclude
    backtrack(i+1,nums,slate);

    //include

    slate.push(nums[i]);
    backtrack(i+1,nums,slate);
    slate.pop();
  }
  backtrack(0,nums,[]);
  return result;
};

let nums = [1,2,3];
// console.log(subsets(nums));

function subset2(nums) {
  let result = [];

  function bT(slate, index) {
    result.push([...slate]);

    for(let i=0; i < nums.length; i++) {
      slate.push(nums[i]);
      bT(slate,index+1);
      slate.pop();

    }
  }
  bT([],0);
  return result;
}

// let nums1 = [1,2,3];
// console.log(subsets(nums1));

function subsetsWithDup(S) {
  // S.sort((a, b) => a - b);
  const ret = [[]];
  let size = 0, startIndex = 0;
  for (let i = 0; i < S.length; i++) {
    startIndex = i >= 1 && S[i] === S[i - 1] ? size : 0;
    size = ret.length;
    for (let j = startIndex; j < size; j++) {
      const temp = [...ret[j]];
      console.log(temp);
      temp.push(S[i]);
      ret.push(temp);
    }
  }
  return ret;
}

let nums1 = [1,2,3];
// console.log(subsetsWithDup(nums1));

function findSubset(nums,index,slate,result) {
  // let result = [];
  if(index == nums.length){
    result.push(slate.slice());
    return;
  }
  // slate.push(nums.slice());

 findSubset(nums, index+1, slate, result);
 
 slate.push(nums[index]);
 findSubset(nums,index+1,slate, result);
 slate.pop();

 return result;
}

let subNums = [1,2,3];
console.log(findSubset(subNums,0,[],[]));