/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let height = new Array(col).fill(0);
    let max = 0;

    for(let i=0; i<row; i++) {

        for(let j=0; j<col; j++) {

            if(matrix[i][j] === '1') {
                height[j] += 1
            } else {
                height[j] = 0;
            }
        }
        // console.log(height);
        max = Math.max(max,largestRect(height));
    }
    return max;
};

function largestRect(height) {

    let stack = [];
    let max = 0;
    height.push(0);
    // console.log("myHeight "+height);

    for(let i=0; i<height.length; i++) {
        while(stack.length !== 0 && height[i] < height[stack[stack.length - 1]]) {

            let top = stack.pop();
            let area = height[top] * (stack.length === 0 ? i : (i - stack[stack.length - 1] - 1));
            max = Math.max(max, area);
        }

        stack.push(i);
    }

    return max;
}

let matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];

console.log(maximalRectangle(matrix));
// Output: 6