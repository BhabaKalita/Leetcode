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
var diameterOfBinaryTree = function(root) {
    if(root == null) {
        return 0;
    }

    let op1 = diameterOfBinaryTree(root.left);
    let op2 = diameterOfBinaryTree(root.right);
    let op3 = height(root.left) + height(root.right);

    let ans = Math.max(op1,op2,op3);

    return ans;
};

function height(root) {
    if(root == null) {
        return 0;
    }

    let left = height(root.left);
    let right = height(root.right);

    let ans = Math.max(left, right) + 1;

    return ans;
}