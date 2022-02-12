---
sidebar_position: 4
tags: ['mst', 'prims']
---

# Prim's Algorithm

Prim’s algorithm is an alternative method for constructing minimum spanning trees. The algorithm first adds an arbitrary node to the tree, and then always chooses a minimum weight edge that adds a new node to the tree. Finally, all nodes have been added and a minimum spanning tree has been found.

Prim’s algorithm resembles Dijkstra’s algorithm. The difference is that Dijkstra’s algorithm always selects a node whose distance from the starting node is minimum, but Prim’s algorithm simply selects a node that can be added to the tree using a minimum weight edge.

|![Prim’s algorithm](/img/tutorial/graph_algorithms/43.gif)|
|:--:|
| **Fig. 43:** Prim’s algorithm |

As an example, Fig. 43 shows how Prim’s algorithm constructs a minimum spanning tree for our example graph, assuming that the starting node is node 1. Like Dijkstra’s algorithm, Prim’s algorithm can be efficiently implemented using a priority queue. The priority queue should contain all nodes that can be connected to the current component using a single edge, in increasing order of the weights of the corresponding edges.

The time complexity of Prim’s algorithm is $\cal{O}(n + m \cdot \log m)$ that equals the time complexity of Dijkstra’s algorithm. In practice, Prim’s and Kruskal’s algorithms are both efficient, and the choice of the algorithm is a matter of taste. Still, most competitive programmers use Kruskal’s algorithm