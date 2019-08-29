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

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			v => v !== vertex2
		);
		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			v => v !== vertex1
		);
	}

	removeVertex(vertex) {
		while(this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
	}
}

var gr = new Graph();
gr.addVertex("Dallas");
gr.addVertex("Tokyo");
gr.addVertex("Aspen");
gr.addVertex("Los Angeles");
gr.addVertex("Hong Kong");
gr.addEdge("Dallas", "Tokyo");
gr.addEdge("Dallas", "Aspen");
gr.addEdge("Hong Kong", "Tokyo");
gr.addEdge("Hong Kong", "Dallas");
gr.addEdge("Los Angeles", "Hong Kong");
gr.addEdge("Los Angeles", "Aspen");