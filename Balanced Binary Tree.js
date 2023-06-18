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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    if(root == null) {
        return true;
    }

    let lt = height(root.left);
    let rt = height(root.right);

    if(Math.abs(lt-rt) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true) {
        return true;
    }

    return false;
};

function height(root) {

    if(root == null) return 0;

    let left = height(root.left);
    let right = height(root.right);

    let ans = Math.max(left, right) + 1;

    return ans;
}