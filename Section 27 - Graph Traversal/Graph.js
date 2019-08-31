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

	depthFirstRecursive(start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if(!vertex) return null;
			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach(neighbor => {
				if(!visited[neighbor]) {
					return dfs(neighbor);
				}
			});
		})(start)

		return result;
	}

	depthFirstIterative(start) {
		const stack = [];
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;
		let currentVertex;

		stack.push(start);
		visited[start] = true;

		while(stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			adjacencyList[currentVertex].forEach(neighbor => {
				if(!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
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

// Graph Traversal
var traverseGraphExample = new Graph();
traverseGraphExample.addVertex("A");
traverseGraphExample.addVertex("B");
traverseGraphExample.addVertex("C");
traverseGraphExample.addVertex("D");
traverseGraphExample.addVertex("E");
traverseGraphExample.addVertex("F");

traverseGraphExample.addEdge("A", "B");
traverseGraphExample.addEdge("A", "C");
traverseGraphExample.addEdge("B", "D");
traverseGraphExample.addEdge("C", "E");
traverseGraphExample.addEdge("D", "E");
traverseGraphExample.addEdge("D", "F");
traverseGraphExample.addEdge("E", "F");