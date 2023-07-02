/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    /*
    * if root == p||q return root
    * p-> left subtree, q-> right subtree. if(!null) return root
    * if both p & q (!null) return anyone
    * if left == null, return right else left
     */
 
     if(root == null) return null;
     
     if(root == p || root == q) return root;
 
     let left = lowestCommonAncestor(root.left, p, q);
     let right = lowestCommonAncestor(root.right, p, q);
 
     if(left && right) return root;
 
     return (left !== null) ? left : right;
 };