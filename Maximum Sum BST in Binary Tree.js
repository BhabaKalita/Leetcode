/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
    let maxSum = 0;
    
    function helper(node) {
        if (!node) return [Infinity, -Infinity, 0, true];
        
        const [leftMin, leftMax, leftSum, leftValid] = helper(node.left);
        const [rightMin, rightMax, rightSum, rightValid] = helper(node.right);
        
        if (
            leftValid &&
            rightValid &&
            leftMax < node.val &&
            rightMin > node.val
        ) {
            const currentSum = leftSum + rightSum + node.val;
            maxSum = Math.max(maxSum, currentSum);
            return [
                Math.min(leftMin, node.val),
                Math.max(rightMax, node.val),
                currentSum,
                true
            ];
        } else {
            return [0, 0, 0, false];
        }
    }
    
    helper(root);
    return maxSum;
};
