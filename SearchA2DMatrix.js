function searchMatrix(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;

    let start = 0;
    let end = row*col-1;

    while(start <= end){
        let mid = ~~(start + (end-start));
        let m = ~~(mid/col);
        let n = mid%col;

        if(matrix[m][n] === target) {
            return true;
        } else if(matrix[m][n] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
  }
  
  let matrix = [[1, 3, 5], [7, 9, 11], [13, 15, 17]];
  let target = 19;
  let result = searchMatrix(matrix, target);
  console.log(result);  