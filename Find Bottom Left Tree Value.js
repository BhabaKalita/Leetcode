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
var findBottomLeftValue = function(root) {
    if(root == null) return;

    let q = [root];
    let finalN = null;

    while(q.length > 0) {
        
        let len = q.length;
        finalN = q[0].val;

        for(let i=0; i<len; i++) {
            let node = q.shift();

            if(node.left) q.push(node.left);

            if(node.right) q.push(node.right);
        }
    }
    return finalN;
};