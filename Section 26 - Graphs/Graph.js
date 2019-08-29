class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if(!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}
	
	addEdge(vertex1, vertex2) {
		if(this.adjacencyList[vertex1] && !this.adjacencyList[vertex1].includes(vertex2)) {
			this.adjacencyList[vertex1].push(vertex2);
		}
		if(this.adjacencyList[vertex2] && !this.adjacencyList[vertex2].includes(vertex1)) {
			this.adjacencyList[vertex2].push(vertex1);
		}
	}
}

var gr = new Graph();
gr.addVertex("Tokyo");
gr.addVertex("San Diego");
gr.addVertex("San Francisco");
gr.addEdge("San Diego", "San Francisco");