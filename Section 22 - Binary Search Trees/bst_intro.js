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

	insert(val) {
		var newNode = new Node(val);
		if(this.root === null) {
			this.root = newNode;
			return this;
		}
		var current = this.root;
		while(true) {
			if(val === current.value) return undefined;
			if(val < current.value) {
				if(current.left === null) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			} else {
				if(current.right === null) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			} 
		}
	}
}

var tree = new BinarySearchTree();