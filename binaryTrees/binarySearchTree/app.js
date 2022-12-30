// Recursive function to test is binary tree proper
function testTraverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : testTraverse(node.left);
	tree.right = node.right === null ? null : testTraverse(node.right);
	return tree;
}

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {}

	lookup(value) {}

	remove(value) {}
}

const tree = new BinarySearchTree();
