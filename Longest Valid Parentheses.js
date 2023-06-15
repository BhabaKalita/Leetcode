
/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s) {
//     let stack = [];
//     let result = 0;
//     stack.push(-1);

//     for(let i=0; i<s.length; i++) {

//         if(s[i] == '(') {
//             stack.push(i);
//         } else {
//             stack.pop();
//             if(stack.length !=0) {
//                 const leng = i - stack[stack.length - 1];

//                 if(leng > result) {
//                     result = leng;
//                 }
//             } else {
//                 stack.push(i);
//             }
//         }
//     }
//     return result;
// };

//   // Example usage:
//   const inputString = '(()()';
//   const longestValidSubstring = findLongestValidSubstring(inputString);
//   console.log(longestValidSubstring);

function findLongestValidSubstring(str) {
    
    let left = 0, right = 0, maxCount = 0;
    
    for(let i=0; i<str.length; i++) {
        
        (str[i] == '(') ? left++ : right++;

        if(right > left) {
            right=0;
            left=0;
        }

        if(right == left) {
            maxCount = Math.max(maxCount, 2*right);
        }
    }

    left=0;
    right=0;

    for(let j=str.length-1; j>=0; j--) {

        (str[j] == ')') ? right++ : left++;

        if(left > right) {
            left=0; 
            right=0;
        }

        if(left == right) {
            maxCount = Math.max(maxCount, 2*left);
        }
    }

    return maxCount;
  }

const inputString = '()(()))))';
const longestValidSubstring = findLongestValidSubstring(inputString);
console.log(longestValidSubstring);

