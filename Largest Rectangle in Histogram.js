/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  
    let stack = [];

    let i = 0, maxArea=0 ;

    while(i <= heights.length) {
        
        let h = (i === heights.length ? 0 : heights[i]);
        let length = 0; //[6,2,5,4,5,1,6]
        let width = 0;
        let area = 0;


        if(stack.length === 0 || h >= heights[stack[stack.length-1]]) {
            stack.push(i);
            i++;

        } else {
            let top = stack.pop();
             length = heights[top];
             width = (stack.length === 0 ? i : i - stack[stack.length-1] - 1);
             area = length * width;
            maxArea = Math.max(maxArea, area);        
        }
        console.log(`I is ${i} h is ${h} and stack is ${stack}`);
        console.log(`Length is ${length}, Width is ${width} Area is ${area} and stack is ${stack}`);
    }
    return maxArea;
};

let heights = [6,2,5,4,5,1,6];
// console.log("Max Area -> "+largestRectangleArea(heights));
/*
function largestRectangleArea(heights) {
    const stack = []; // Stack to store the indices of bars
    let maxArea = 0;
    let i = 0;
  
    while (i <= heights.length) {
      const h = (i === heights.length ? 0 : heights[i]);
  
      if (stack.length === 0 || h >= heights[stack[stack.length - 1]]) {
        stack.push(i);
        i++;
      } else {
        const top = stack.pop();
        const area = heights[top] * (stack.length === 0 ? i : (i - stack[stack.length - 1] - 1));
        maxArea = Math.max(maxArea, area);
      }
    }
  
    return maxArea;
  }
  
  // Example usage:
  const heights = [2, 1, 5, 6, 2, 3];
  const area = largestRectangleArea(heights);
  console.log(area); // Output: 10
  */

  function largestAreaHistogram(height) {

    let stack = [];
    let maxArea = 0;

    for(let i=0; i<height.length; i++) {
      while(stack.length > 0 && (i === height.length || height[i] < height[stack[stack.length - 1]])) {
        let top = stack.pop();

        let width = (stack.length === 0) ? i : (i - stack[stack.length - 1] - 1);
        let area = height[top] * width;
        maxArea = Math.max(maxArea, area);
      }
      stack.push(i);
    }
     return maxArea;
  }

let height1 = [6,2,5,4,5,1,6];
console.log(largestAreaHistogram(height1));
