---
sidebar_position: 2
tags: ['graph','shortest-paths', 'bellman-ford']
---

# Bellman-Ford Algorithm

The Bellman–Ford algorithm finds shortest paths from a starting node to all nodes of the graph. The algorithm can process all kinds of graphs, provided that the graph does not contain a cycle with negative length. If the graph contains a negative cycle, the algorithm can detect this.

## Algorithm

The algorithm keeps track of distances from the starting node to all nodes of the graph. Initially, the distance to the starting node is 0 and the distance to any other node is infinite. The algorithm then reduces the distances by finding edges that shorten the paths until it is not possible to reduce any distance.

| ![The Bellman-Ford Algorithm](/img/tutorial/graph_algorithms/18.gif) |
|:--:|
| **Fig. 18:** The Bellman-Ford Algorithm |
	
Figure 18 shows how the Bellman–Ford algorithm processes a graph. First, the algorithm reduces distances using the edges $1 \to 2$, $1 \to 3$ and $1 \to 4$, then using the edges $2 \to 5$ and $3 \to 4$, and finally using the edge $4 \to 5$. After this, no edge can be used to reduce distances, which means that the distances are final.

## Implementation

The implementation of the Bellman–Ford algorithm below determines the shortest distances from a node `x` to all nodes of the graph. The code assumes that the graph is stored as an edge list edges that consists of tuples of the form `(a, b, w)`, meaning that there is an edge from node `a` to node b with weight `w`.

The algorithm consists of `n−1` rounds, and on each round the algorithm goes through all edges of the graph and attempts to reduce the distances. The algorithm constructs an array distance that will contain the distances from node `x` to all nodes. The constant `INF` denotes an infinite distance.

```cpp
for (int i = 1; i <= n; i++) {
	distance[i] = INF;
}
distance[x] = 0;
for (int i = 1; i <= n-1; i++) {
	for (auto e : edges) {
		int a, b, w;
		tie(a, b, w) = e;
		distance[b] = min(distance[b], distance[a]+w);
	}
}
```

The time complexity of the algorithm is $\cal{O}(n\cdot m)$, because the algorithm consists of `n −1` rounds and iterates through all m edges during a round.

:::info NOTE
A negative cycle can be detected using the Bellman–Ford algorithm by running the algorithm for n rounds. If the last round reduces any distance, the graph contains a negative cycle.
:::