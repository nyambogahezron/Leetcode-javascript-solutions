/**
 * Problem: Serialize and Deserialize a Binary Tree (Advanced)
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * 
 * Challenge: Your solution should ideally be space-efficient and handle edge cases like unbalanced trees or extremely deep trees without causing a stack overflow.
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

/**
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  // Write your code here
  return "";
}

/**
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  // Write your code here
  return null;
}

// Test case example
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right!.left = new TreeNode(4);
root.right!.right = new TreeNode(5);

let serialized = serialize(root);
console.log("Serialized:", serialized);
console.log("Deserialized:", deserialize(serialized));

// Explanation
// ...
