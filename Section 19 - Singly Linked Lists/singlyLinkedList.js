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
	pop() {
		if(!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		while(current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if(!this.head) return undefined;
		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		return currentHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = this.head;
		}else{
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
}

var list = new SlinglyLinkedList();
list.push("HELLO");
list.puah("GOODBYE");