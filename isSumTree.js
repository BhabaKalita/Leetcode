
class Node {
    constructor(val) {

        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isSumTree(root) {
    // if root is null or leaf nodes are empty, return true
    if(root == null || (root.left == null && root.right == null)) {
        return true;
    }

    let left = getSum(root.left);
    let right = getSum(root.right);

    if(root.val == left + right && isSumTree(root.left) && isSumTree(root.right)) {
        return true;
    }
    return false;
}

function getSum(root) {
    if(root == null) return 0;

    return getSum(root.left) + root.val + getSum(root.right);
}

// var root = new Node(3);
//     root.left = new Node(1);
//     root.right = new Node(2);
//     // root.left.left = new Node(4);
//     // root.left.right = new Node(5);
//     console.log(isSum(root));

// Create the binary tree
const root = new Node(10);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(1);
root.right.left = new Node(2);
root.right.right = new Node(5);

// Check if the binary tree is a Sum Tree
const isSum = isSumTree(root);
console.log(isSum); // Output: true