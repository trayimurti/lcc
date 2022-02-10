---
sidebar_position: 1
tags: ['graph','graph-traversal', 'dfs']
---

# Depth-First Search (DFS)

Depth-first search (DFS) is a straightforward graph traversal technique. The algorithm begins at a starting node and proceeds to all other nodes that are reachable from the starting node using the edges of the graph.

## Algorithm

Depth-first search always follows a single path in the graph as long as it finds new nodes. After this, it returns to previous nodes and begins to explore other parts of the graph. The algorithm keeps track of visited nodes, so that it processes each node only once.

| ![Depth-First Search](/img/tutorial/graph_algorithms/13.gif) |
|:--:|
| **Fig. 13:** Depth-First Search |

Fig. 13 shows how depth-first search processes a graph. The search can begin at any node of the graph; in this example we begin the search at node 1. First the search explores the path $1 \to 2 \to 3 \to 5$, then returns back to node 1 and visits the remaining node 4.

## Implementation

Depth-first search can be conveniently implemented using recursion. The following function dfs begins a depth-first search at a given node. The function assumes that the graph is stored as adjacency lists in an array (`vector<int> adj[N];`) and also maintains an array that keeps track of the visited nodes (`bool visited[N];`). Initially, each array value is `false`, and when the search arrives at node `s`, the value of `visited[s]` becomes `true`.

The function can be implemented as follows:

```cpp
void dfs(int s) {
	if (visited[s]) return;
	visited[s] = true;
	// process node s
	for (auto u: adj[s]) {
		dfs(u);
	}
}
```

The time complexity of depth-first search is $\cal{O}(n +m)$ where `n` is the number of nodes and `m` is the number of edges, because the algorithm processes each node and edge once.