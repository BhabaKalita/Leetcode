/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let n = inorder.length;

    if(n === 0) return null;
    //if(n === 1) return inorder;

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    let rootIndex = -1;

    for(let i=0; i<n; i++) {
        if(inorder[i] == rootVal) {
            rootIndex = i;
            break;
        }
    }

    const inorderL = inorder.slice(0,rootIndex);
    const inorderR = inorder.slice(1+rootIndex);

    const preorderL = preorder.slice(1,1+inorderL.length);
    const preorderR = preorder.slice(1+inorderL.length);

    root.left = buildTree(preorderL, inorderL);
    root.right = buildTree(preorderR, inorderR);

    return root;
};