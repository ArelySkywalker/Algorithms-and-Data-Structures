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
        var halfLength = Math.floor(this.length / 2);
        var counter = 0;
        var current;
        if(index <= halfLength) {
            current = this.head;
            while(counter != index) {
                current = current.next;
                counter++;
            }
            return current;
        }else {
            current = this.tail;
            while(counter != index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }
}