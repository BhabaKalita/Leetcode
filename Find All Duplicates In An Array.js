// nums = [4,3,2,7,8,2,3,1]
// let card = {};
// for(let num of nums){
//     card[num] = ~~card[num] + 1;
// }
// // console.log(card);
// let val = Object.keys(card);
// console.log(val.filter(key=> card[key] == 2));

function findDuplicates(nums) {
    let duplicates = [];
    for (let i = 0; i < 6; i++) {
      let index = Math.abs(nums[i]) - 1;
      console.log(nums[index]);
      if (nums[index] < 0) {
        duplicates.push(index + 1);
      }
      nums[index] = -nums[index];
      console.log("2-> "+nums[index]);
    }
    return duplicates;
  }
  let nums = [4, 3, 2, 7, 8, 2, 3, 1];
  console.log(findDuplicates(nums))