---
sidebar_position: 2
tags: ['graph', 'terminology', 'cycle-in-a-graph', 'connected-graph', 'tree', 'degree-of-a-node', 'regular-graph', 'complete-graph', 'indegree', 'outdegree', 'bipartite-graph']
---

# Graph Terminology

:::info
In this course we will use variable `n` as number of nodes and variable `m` as number of edges.
The nodes will be numbered using integers 1, 2, ..., n.
:::

Fig. 1 shows a graph example with 5 nodes and 7 edges.

| ![Graph with 5 nodes and 7 edges](/img/tutorial/graph_algorithms/1.png) |
|:--:|
| **Fig. 1:** Graph with 5 nodes and 7 edges |

## Length of a path

The length of a path is the number of edges in it. For example, Fig. 2 shows a path
$1 \to 3 \to 4 \to 5$ of length 3 from node 1 to node 5.

| ![A path from node 1 to node 5](/img/tutorial/graph_algorithms/2.png) |
|:--:|
| **Fig. 2:** A path from node 1 to node 5 |

## Cycle in a graph

A cycle is a path where the first and last node is the same. For example, Fig. 3 shows a cycle $1 \to 3 \to 4 \to 1$.

| ![A cycle of three nodes](/img/tutorial/graph_algorithms/3.png) |
|:--:|
| **Fig. 3:** A cycle of three nodes |

## Connected graph

A graph is connected if there is a path between any two nodes. In Fig. 4, the left graph is connected, but the right graph is not connected, because it is not possible to get from node 4 to any other node.

| ![The left graph is connected, the right graph is not](/img/tutorial/graph_algorithms/3.png) |
|:--:|
| **Fig. 4:** The left graph is connected, the right graph is not |

The connected parts of a graph are called its components. For example, the graph in Fig. 5 has three components: {1, 2, 3}, {4, 5, 6, 7}, and {8}.

| ![A graph with three components](/img/tutorial/graph_algorithms/3.png) |
|:--:|
| **Fig. 5:** A graph with three components |

## Tree

A tree is a connected graph that does not contain cycles. Figure 6 shows an example of a graph that is a tree.

| ![A Tree](/img/tutorial/graph_algorithms/6.png) |
|:--:|
| **Fig. 6:** A Tree |

## Directed graph

In a directed graph, the edges can be traversed in one direction only. Figure 7 shows an example of a directed graph. This graph contains a path $3 \to 1 \to 2 \to 5$ from node 3 to node 5, but there is no path from node 5 to node 3.

| ![A directed graph](/img/tutorial/graph_algorithms/7.png) |
|:--:|
| **Fig. 7:** A directed graph |

## Weighted graph

In a weighted graph, each edge is assigned a weight. The weights are often interpreted as edge lengths, and the length of a path is the sum of its edge weights. For example, the graph in Fig. 8 is weighted, and the length of the path $1 \to 3 \to 4 \to 5$ is $1 + 7 + 3 = 11$. This is the shortest path from node 1 to node 5.

| ![A weighted graph](/img/tutorial/graph_algorithms/8.png) |
|:--:|
| **Fig. 8:** A weighted graph |

## Neighbors or adjacent nodes

Two nodes are neighbors or adjacent if there is an edge between them.

## Degree of a node

The degree of a node is the number of its neighbors. Figure 9 shows the degree of each node of a graph. For example, the degree of node 2 is 3, because its neighbors are 1, 4, and 5.

The sum of degrees in a graph is always 2m, where m is the number of edges,
because each edge increases the degree of exactly two nodes by one. For this reason,
the sum of degrees is always even.

| ![Degrees of nodes](/img/tutorial/graph_algorithms/9.png) |
|:--:|
| **Fig. 9:** Degrees of nodes |

## Regular graph

A graph is regular if the degree of every node is a constant d.

## Complete graph

A graph is complete if the degree of every node is n − 1, i.e., the graph contains all possible edges between the nodes.

## Indegree and Outdegree

In a directed graph, the indegree of a node is the number of edges that end at the node, and the outdegree of a node is the number of edges that start at the node. Figure 10 shows the indegree and outdegree of each node of a graph. For example, node 2 has indegree 2 and outdegree 1.

| ![Indegrees and outdegrees](/img/tutorial/graph_algorithms/10.png) |
|:--:|
| **Fig. 10:** Indegrees and outdegrees |

## Bipartite graph

A graph is bipartite if it is possible to color its nodes using two colors in such a way that no adjacent nodes have the same color. It turns out that a graph is bipartite exactly when it does not have a cycle with an odd number of edges. For example, Fig. 11 shows a bipartite graph and its coloring.

| ![A bipartite graph and its coloring](/img/tutorial/graph_algorithms/11.png) |
|:--:|
| **Fig. 11:** A bipartite graph and its coloring |