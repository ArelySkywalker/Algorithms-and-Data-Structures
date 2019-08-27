
class maxBinaryHeap {
	constructor() {
		this.values = [];
	}

	// Insert value into Binary Heap
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}


	// Bubble Up!
	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while(index > 0) {
			let parentIndex = Math.floor((index - 1)/2);
			let parent = this.values[parentIndex];
			if(element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent
			index = parentIndex;
		}
	}
}

var heap = new maxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);