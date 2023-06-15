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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

    if(root == null) {
        return [];
    }
    
    let q = [root];
    let res = [];

    while(q.length > 0) {

        let levelSize = q.length;
        let currLevel = [];
        for(let i=0; i<levelSize; i++) {
            let currNode = q.shift();
            currLevel.push(currNode.val);

            if(currNode.left !== null) {
                q.push(currNode.left);
            }

            if(currNode.right !== null) {
                q.push(currNode.right);
            }
        }
        res.unshift(currLevel);
    }

    return res;

};