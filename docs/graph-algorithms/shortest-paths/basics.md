---
sidebar_position: 1
tags: ['graph','shortest-paths', 'unweighted-graph']
---

# Basics

Finding a shortest path between two nodes of a graph is an important problem that has many practical applications. For example, a natural problem related to a road network is to calculate the shortest possible length of a route between two cities, given the lengths of the roads.

## Unweighted Graph

### Algorithm

In an unweighted graph, the length of a path equals the number of its edges, and we can simply use breadth-first search to find a shortest path.

### Implementation

| ![Unweighted Graph](/img/tutorial/graph_algorithms/1.png) |
|:--:|
| **Fig. 1:** Unweighted Graph |

Suppose, in graph (Fig. 1) we have to find shortest distance between node 1 and node 5. We will traverse the graph using BFS taking node 1 as root node and store depth of nodes (from root node 1) in `depth[i]`.

```cpp
queue<int> q;
bool visited[N];
int distance[N];
// x : starting node of path (root node)
visited[x] = true;
depth[x] = 0;
q.push(x);
while (!q.empty()) {
	int s = q.front(); q.pop();
	// process node s
	for (auto u : adj[s]) {
		if (visited[u]) continue;
		visited[u] = true;
		depth[u] = depth[s]+1;
		q.push(u);
	}
}
// y : ending node of path
cout << depth[y] << endl;
```