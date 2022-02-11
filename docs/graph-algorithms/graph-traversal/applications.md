---
sidebar_position: 3
tags: ['graph','graph-traversal', 'applications', 'connectivity-check', 'cycle-detection', '	bipartiteness-check']
---

# Applications

:::note NOTE
In the applications described below we will assume that the graph is undirected.
:::

## Connectivity Check

A graph is connected if there is a path between any two nodes of the graph. Thus, we can check if a graph is connected by starting at an arbitrary node and finding out if we can reach all other nodes.

| ![Checking the connectivity of a graph](/img/tutorial/graph_algorithms/15.png) |
|:--:|
| **Fig. 15:** Checking the connectivity of a graph |

For example, in Fig. 15, since a depth-first search from node 1 does not visit all  the nodes, we can conclude that the graph is not connected. In a similar way, we can  also find all connected components of a graph by iterating through the nodes and  always starting a new depth-first search if the current node does not belong to any component yet.

## Cycle Detection

| ![Finding a cycle in a graph](/img/tutorial/graph_algorithms/16.png) |
|:--:|
| **Fig. 16:** Finding a cycle in a graph |

A graph contains a cycle if during a graph traversal, we find a node whose neighbor (other than the previous node in the current path) has already been visited. For example, in Fig. 16, a depth-first search from node 1 reveals that the graph contains a cycle. After moving from node 2 to node 5 we notice that the neighbor 3 of node 5 has already been visited. Thus, the graph contains a cycle that goes through node 3, for example, $3 \to 2 \to 5 \to 3$.

Another way to determine if a graph contains a cycle is to simply calculate the number of nodes and edges in every component. If a component contains `c` nodes and no cycle, it must contain exactly `c − 1` edges (so it has to be a tree). If there are `c` or more edges, the component surely contains a cycle.

## Bipartiteness Check

A graph is bipartite if its nodes can be colored using two colors so that there are no adjacent nodes with the same color. It is surprisingly easy to check if a graph is bipartite using graph traversal algorithms.

The idea is to pick two colors `X` and `Y`, color the starting node `X`, all its neighbors `Y`, all their neighbors `X`, and so on. If at some point of the search we notice that two adjacent nodes have the same color, this means that the graph is not bipartite. Otherwise the graph is bipartite and one coloring has been found.

| ![A conflict while checking bipartiteness](/img/tutorial/graph_algorithms/17.png) |
|:--:|
| **Fig. 17:** A conflict while checking bipartiteness |

For example, in Fig. 17, a depth-first search from node 1 shows that the graph is not bipartite, because we notice that both nodes 2 and 5 should have the same color, while they are adjacent nodes in the graph. 

This algorithm always works, because when there are only two colors available, the color of the starting node in a component determines the colors of all other nodes in the component. It does not make any difference what the colors are.

:::note NOTE
In the general case it is difficult to find out if the nodes in a graph can be colored using `k` colors so that no adjacent nodes have the same color. The problem is NP-hard already for `k = 3`.
:::