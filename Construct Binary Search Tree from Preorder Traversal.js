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
 * @return {TreeNode}
 */

function preToBST(min, max, arr, index) {
    
    let point = index[0]; 
    if(point >= arr.length) return null;
    let value = arr[point];

    if(value < min || value > max) return null;

    let root = new TreeNode(value);
    index[0]++;
    root.left = preToBST(min,root.val,arr,index);
    root.right = preToBST(root.val,max,arr,index);

    return root;
}
var bstFromPreorder = function(preorder) {
    
    let index = [0];
    return preToBST(Number.MIN_VALUE, Number.MAX_VALUE, preorder, index);
};