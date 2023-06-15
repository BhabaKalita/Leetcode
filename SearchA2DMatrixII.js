var searchMatrix = function(matrix, target) {
    let row=matrix.length, col=matrix[0].length;

    let left=0, right=col-1;

    while(left<row && right>=0) {

        let ele = matrix[left][right];

        if(ele === target) {
            return true;
        } else if(ele > target) {
            right--;
        } else {
            left++;
        }
    } return false;
};

let matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
let target = 20;

console.log(searchMatrix(matrix,target));