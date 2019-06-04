// piece of data - val
// reference to next node - next

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SlinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
}

var list = new SlinglyLinkedList();
list.push("HELLOW");
list.puah("GOODBYE");