---
sidebar_position: 2
tags: ['graph','adjacency-list', 'adjacency-matrix', 'edge-list']
---

# Graph Representation

There are three classical ways to represent a graph. The choice of a data structure depends on the size of the graph and the way the algorithm processes it.

1. Adjacency List
2. Adjacency Matrix
3. Edge List

| ![Example graphs](/img/tutorial/graph_algorithms/12.png) |
|:--:|
| **Fig. 12:** Example graphs |

## Adjacency List

In the adjacency list representation, each node `x` of the graph is assigned an adjacency list that consists of nodes to which there is an edge from `x`. Adjacency lists are the most popular way to represent graphs, and most algorithms can be efficiently implemented using them.


**Example:** for graph (Fig 12(a))

```cpp
// Declaration of Adjacency List
vector<int> adj[N];
// Building Adjacency List
adj[1].push_back(2);
adj[2].push_back(3);
adj[2].push_back(4);
adj[3].push_back(4);
adj[4].push_back(1);
```

If the graph is undirected, it can be stored in a similar way, but each edge is added in both directions.

For a weighted graph, the adjacency list of node a contains the pair `(b,w)` always when
there is an edge from node `a` to node `b` with weight `w`.

**Example:** for graph (Fig 12(b))

```cpp
// Declaration of Adjacency List
vector<pair<int,int>> adj[N];
// Building Adjacency List
adj[1].push_back({2,5});
adj[2].push_back({3,7});
adj[2].push_back({4,6});
adj[3].push_back({4,5});
adj[4].push_back({1,2});
```

## Adjacency Matrix

An adjacency matrix indicates the edges that a graph contains. We can efficiently check from an adjacency matrix if there is an edge between two nodes. The matrix can be stored as an array `int adj[N][N];` where each value `adj[a][b]` indicates whether the graph contains an edge from node `a` to node `b`. If the edge is included in the graph, then `adj[a][b] = 1`, and otherwise `adj[a][b] = 0`.

**Example:** for graph (Fig 12(a))

$$
\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 1 \\
1 & 0 & 0 & 0
\end{bmatrix}
$$

If the graph is weighted, the adjacency matrix representation can be extended
so that the matrix contains the weight of the edge if the edge exists.

**Example:** for graph (Fig 12(a))

$$
\begin{bmatrix}
0 & 5 & 0 & 0 \\
0 & 0 & 7 & 6 \\
0 & 0 & 0 & 5 \\
2 & 0 & 0 & 0
\end{bmatrix}
$$

The drawback of the adjacency matrix representation is that an adjacency matrix
contains $n^2$ elements, and usually most of them are zero. For this reason, the representation cannot be used if the graph is large.

## Edge List

An edge list contains all edges of a graph in some order. This is a convenient way to represent a graph if the algorithm processes all its edges, and it is not needed to find edges that start at a given node.

**Example:** for graph (Fig 12(a))

```cpp
// Declaration of Edge List
vector<pair<int,int>> edges;
// Building Edge List
edges.push_back({1,2});
edges.push_back({2,3});
edges.push_back({2,4});
edges.push_back({3,4});
edges.push_back({4,1});
```

If the graph is weighted, then each element in this list is of the form `(a, b, w)`, which means that there is an edge from node `a` to node `b` with weight `w`.

**Example:** for graph (Fig 12(b))

```cpp
// Declaration of Adjacency List
vector<tuple<int,int,int>> edges;
// Building Adjacency List
edges.push_back({1,2,5});
edges.push_back({2,3,7});
edges.push_back({2,4,6});
edges.push_back({3,4,5});
edges.push_back({4,1,2});
```
