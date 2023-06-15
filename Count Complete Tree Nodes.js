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
var countNodes = function(root) {

    if(root == null || root.length == 0) {
        return 0;
    }
    let q = [root];
    let res = [];

    while(q.length > 0) {
        let curr = q.shift();
        res.push(curr.val);

        if(curr.left) {
            q.push(curr.left);
        }

        if(curr.right) {
            q.push(curr.right);
        }
    }
    return res.length;
};