class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function deleteNode(root, key) {
    if (root === null) {
        return null; // Node not found
    }
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Node with the key is found
        
        // Case 1: Node with only one child or no child
        if (root.left === null) {
            return root.right;
        } else if (root.right === null) {
            return root.left;
        }
        
        // Case 2: Node with two children
        root.val = minValueNode(root.right).val;
        root.right = deleteNode(root.right, root.val);
    }
    
    return JSON.stringify(root);
}

function minValueNode(node) {
    let current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

// Example usage
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Original BST:");
console.log(JSON.stringify(root));

root = deleteNode(root, 6);

console.log("BST after deleting node with key 6:");
console.log(root);
