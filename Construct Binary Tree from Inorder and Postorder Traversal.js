/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var mp = {};
var index;
var buildTree = function(inorder, postorder) {
   let n = inorder.length;
   for(let i=0; i<n; i++) {
       mp[inorder[i]] = i;
   }
   index = n-1;
   return buildTreeUtil(inorder,postorder,0,n-1);
};

function buildTreeUtil(inorder,post,inStart,inEnd) {
   if(inStart > inEnd) return null;

   let curr = post[index];
   let node = new TreeNode(curr);
   index--;

   if(inStart == inEnd) return node;

   let iIndex = mp[curr];

   node.right = buildTreeUtil(inorder,post,iIndex+1,inEnd);
   node.left = buildTreeUtil(inorder,post,inStart,iIndex-1);

   return node;
}