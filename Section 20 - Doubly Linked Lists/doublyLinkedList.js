// piece of data - val
// reference to next node - next
// reference to prev node - prev

class Node {
	constructor(val) {
		this.val = val;
        this.next = null;
        this.prev = null;
	}
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head == null;
            this.tail == null;
        }else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter, current;
        if(index <= this.length / 2) {
            count = 0;
            current = this.head;
            while(counter != index) {
                current = current.next;
                counter++;
            }
        }else {
            count = this.length - 1;
            current = this.tail;
            while(counter != index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) this.unshift(val);
        if(index === this.length) this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        var byeNode = this.get(index);
        var beforeNode = byeNode.prev;
        var afterNode = byeNode.next;
        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        byeNode.next = null, byeNode.prev = null;

        this.legnth--;
        return byeNode;
    }
    reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		var prev = null;
		for(var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
	print() {
		var arr = [];
		var current = this.head;
		while(current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}
}