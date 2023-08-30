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
 * @return {TreeNode}
 */

function inOrder(root, arr) {
    if(root == null) return;

    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
}

function binaryToBST(s,e,arr) {

    if(s > e) return null;

    let mid = Math.floor((s+e)/2);
    let root = new TreeNode(arr[mid]);
    root.left = binaryToBST(s,mid-1,arr);
    root.right = binaryToBST(mid+1,e,arr);

    return root;
}
var balanceBST = function(root) {
   
   if(root == null) return root;
   let inOrderVal = [];
   inOrder(root, inOrderVal);

   return binaryToBST(0,inOrderVal.length-1,inOrderVal);
   //  root;

};