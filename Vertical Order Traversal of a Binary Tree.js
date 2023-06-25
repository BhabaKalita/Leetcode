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
var verticalTraversal = function(root) {
    
    if(root == null) return [];
    let q = [{node:root,row:0,col:0}];
    let map = new Map();

    while(q.length > 0) {

        let {node,row,col} = q.shift();
        if(!map.has(col)) {
            map.set(col,[]);
        }
        map.get(col).push({node:node.val,row});

        if(node.left) {
            q.push({node:node.left,row:row+1,col:col-1});
        }

        if(node.right) {
            q.push({node:node.right, row:row+1, col:col+1});
        }
    }

    let res = [];
    let sortNode = Array.from(map.keys()).sort((a,b)=>a-b);

    for(let col of sortNode) {
        let nodes = map.get(col);
        nodes.sort((a,b)=> {
            if(a.row == b.row) {
                return a.node-b.node;
            }
            return a.row-b.row;
        })
        res.push(nodes.map(n=>n.node));
    }
    return res;
};