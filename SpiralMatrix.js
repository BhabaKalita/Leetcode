/*
function SpiralMatrix(matrix){
    let row = matrix.length;
    let col = matrix[0].length;
    let total = row*col;
    let ans = [];

    let count = 0;
    let startingRow = 0;
    let startingCol = 0;
    let endingRow = row - 1;
    let endingCol = col - 1;

    while(count < total){
        // Printing starting row
        for(let index = startingCol; count < total & index <= endingCol; index++){
            ans.push(matrix[startingRow][index]);
            count++;
        }
        startingRow++;
        //  Printing Ending col
        for(let index = startingRow; count < total & index <= endingRow; index++){
            ans.push(matrix[index][endingCol]);
            count++;
        }
        endingCol--;
        // Printing Ending row
        for (let index = endingCol; count < total & index >= startingCol; index--) {
            ans.push(matrix[endingRow][index]);
            count++;
        }
        endingRow--;
        // Printing starting col
        for (let index = endingRow; count < total & index >= startingRow; index--) {
            ans.push(matrix[index][startingCol]);
            count++;            
        }
        startingCol++;

    }
    return ans;
}

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(SpiralMatrix(matrix));
*/

// New Optimised solution
function spiralOrder(matrix) {
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    
    while (top <= bottom && left <= right) {
      for (let i = left; i <= right; i++) result.push(matrix[top][i]);
      top++;
      for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
      right--;
      if (top <= bottom) {
        for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
        bottom--;
      }
      if (left <= right) {
        for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
        left++;
      }
    }
    
    return result;
  }
  