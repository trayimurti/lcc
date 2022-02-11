---
sidebar_position: 2
tags: ['graph','dag', 'dp']
---

# Dynamic programming

Using dynamic programming, we can efficiently answer many questions regarding paths in directed acyclic graphs. Examples of such questions are:

- What is the shortest/longest path from node `a` to node `b`?
- How many different paths are there?
- What is the minimum/maximum number of edges in a path?
- Which nodes appear in every possible path?

## Number of paths

Number of paths from node `a` to node `b`:

Let `paths(x)` denote the number of paths from node `a` to node `x`. As a base case, `paths(a) = 1`. Then, to calculate other values of `paths(x)`, we can use the recursive formula 	
$$
paths(x) = paths(s_1) + paths(s_2) + ... + paths(s_k)
$$
, where $s_1, s_2, ..., s_k$ are the nodes from which there is an edge to `x`. Since the graph is acyclic, the values of paths can be calculated in the order of a topological sort.

|![Calculating the number of paths from node 1 to node 6](/img/tutorial/graph_algorithms/29.png)|
|:--:|
| **Fig. 29:** Calculating the number of paths from node 1 to node 6 |

Fig. 29 shows the values of paths in an example scenario where we want to calculate the number of paths from node 1 to node 6. For example,
$$
paths(6) = paths(2) + paths(3),
$$
because the edges that end at node 6 are $2 \to 6$ and $3 \to 6$. Since `paths(2) = 2`
and `paths(3) = 2`, we conclude that `paths(6) = 4`. The paths are as follows:
- $1 \to 2 \to 3 \to 6$
- $1 \to 2 \to 6$
- $1 \to 4 \to 5 \to 2 \to 3 \to 6$
- $1 \to 4 \to 5 \to 2 \to 6$

## Processing Shortest Paths

Dynamic programming can also be used to answer questions regarding shortest paths in general (not necessarily acyclic) graphs. Namely, if we know minimum distances from a starting node to other nodes (e.g., after using Dijkstra’s algorithm), we can easily create a directed acyclic shortest paths graph that indicates for each node the possible ways to reach the node using a shortest path from the starting node. For example, Fig. 30 shows a graph and the corresponding shortest paths graph.

|![A graph and its shortest paths graph](/img/tutorial/graph_algorithms/30.png)|
|:--:|
| **Fig. 30:** A graph and its shortest paths graph |

## Coin Problem

In fact, any dynamic programming problem can be represented as a directed acyclic graph where each node corresponds to a dynamic programming state and the edges indicate how the states depend on each other.

|![Coin problem as a directed acyclic graph](/img/tutorial/graph_algorithms/31.png)|
|:--:|
| **Fig. 31:** Coin problem as a directed acyclic graph |

For example, consider the problem of forming a sum of money `n` using coins ${c_1, c_2, ..., c_k}$. In this scenario, we can construct a graph where each node corresponds to a sum of money, and the edges show how the coins can be chosen. For example, Fig. 31 shows the graph for the coins `{1, 3, 4}` and `n = 6`. Using this representation, the shortest path from node `0` to node `n` corresponds to a solution with the minimum number of coins, and the total number of paths from node `0` to node `n` equals the total number of solutions.