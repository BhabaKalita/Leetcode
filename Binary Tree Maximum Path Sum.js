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

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function maxPathSum(root) {
    let maxSum = -Infinity;
  
    function maxPathDown(node) {
      if (node === null) {
        return 0;
      }
  
      const leftSum = Math.max(0, maxPathDown(node.left));
      const rightSum = Math.max(0, maxPathDown(node.right));
  
      maxSum = Math.max(maxSum, leftSum + rightSum + node.val);
  
      return Math.max(leftSum, rightSum) + node.val;
    }
  
    maxPathDown(root);
  
    return maxSum;
  }
  
  let root = new Node(-10);
  root.left = new Node(9);
  root.right = new Node(20);
  root.right.left = new Node(15);  
  root.right.right = new Node(7);   /*    7  1 2  3    */
//   root.left.left = new Node(7);    /*     / \ / \     */
console.log(maxPathSum(root));