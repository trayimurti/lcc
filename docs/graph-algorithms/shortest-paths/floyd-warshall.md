---
sidebar_position: 5
tags: ['graph','shortest-paths', 'floyd-warshall-algorithm']
---

# Floyd-Warshall Algorithm

The Floyd–Warshall algorithm provides an alternative way to approach the problem of finding shortest paths. It finds shortest paths between all node pairs of the graph in a single run.

## Algorithm

The algorithm maintains a matrix that contains distances between the nodes. The initial matrix is directly constructed based on the adjacency matrix of the graph. Then, the algorithm consists of consecutive rounds, and on each round, it selects a new node that can act as an intermediate node in paths from now on, and reduces distances using this node.

| ![An input for Floyd-Warshall Algorithm](/img/tutorial/graph_algorithms/22.png) |
|:--:|
| **Fig. 22:** An input for Floyd-Warshall Algorithm |

Let us simulate the Floyd–Warshall algorithm for the graph in Fig. 22. In this case, the initial matrix is as follows:

$$
\begin{bmatrix}
0 & 5 & \infty & 9 & 1 \\
5 & 0 & 2 & \infty & \infty \\
\infty & 2 & 0 & 7 & \infty \\
9 & \infty & 7 & 0 & 2 \\
1 & \infty & \infty & 2 & 0
\end{bmatrix}
$$

On the first round, node 1 is the new intermediate node. There is a new path between nodes 2 and 4 with length 14, because node 1 connects them. There is also a new path between nodes 2 and 5 with length 6.

$$
\begin{bmatrix}
0 & 5 & \infty & 9 & 1 \\
5 & 0 & 2 & \textbf{14} & \textbf{6} \\
\infty & 2 & 0 & 7 & \infty \\
9 & \textbf{14} & 7 & 0 & 2 \\
1 & \textbf{6} & \infty & 2 & 0
\end{bmatrix}
$$

On the second round, node 2 is the new intermediate node. This creates new paths between nodes 1 and 3 and between nodes 3 and 5:

$$
\begin{bmatrix}
0 & 5 & \textbf{7} & 9 & 1 \\
5 & 0 & 2 & \infty & \infty \\
\textbf{7} & 2 & 0 & 7 & \textbf{8} \\
9 & \infty & 7 & 0 & 2 \\
1 & \infty & \textbf{8} & 2 & 0
\end{bmatrix}
$$

The algorithm continues like this, until all nodes have been appointed intermediate nodes. After the algorithm has finished, the matrix contains the minimum distances between any two nodes:

$$
\begin{bmatrix}
0 & 5 & 7 & 3 & 1 \\
5 & 0 & 2 & 8 & 6 \\
7 & 2 & 0 & 7 & 8 \\
3 & 8 & 7 & 0 & 2 \\
1 & 6 & 8 & 2 & 0
\end{bmatrix}
$$

| ![A shortest path from node 2 to node 4](/img/tutorial/graph_algorithms/23.png) |
|:--:|
| **Fig. 23:** A shortest path from node 2 to node 4 |

For example, the matrix tells us that the shortest distance between nodes 2 and 4
is 8. This corresponds to the path in Fig. 23.

## Implementation

The Floyd–Warshall algorithm is particularly easy to implement. The implementation below constructs a distance matrix where `dist[a][b]` denotes the shortest distance between nodes `a` and `b`.

```cpp
// Intializing dist using the adjacency matrix (adj)
for (int i = 1; i <= n; i++) {
	for (int j = 1; j <= n; j++) {
		if (i == j) dist[i][j] = 0;
		else if (adj[i][j]) dist[i][j] = adj[i][j];
		else dist[i][j] = INF;
	}
}
// Floyd-Warshall Implementation
for (int k = 1; k <= n; k++) {
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			dist[i][j] = min(dist[i][j],dist[i][k]+dist[k][j]);
		}
	}
}
```

The time complexity of the algorithm is $\cal{O}(n^3)$, because it contains three nested loops that go through the nodes of the graph.