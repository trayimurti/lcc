---
sidebar_position: 1
tags: ['mst', 'intro']
---

# Introduction

A spanning tree contains all nodes of a graph and some of its edges so that there is a path between any two nodes. Like trees in general, spanning trees are connected and acyclic. The weight of a spanning tree is the sum of its edge weights. For example, Fig. 35 shows a graph and one of its spanning tree. The weight of this spanning tree is $3 + 5 + 9 + 3 + 2 = 22.$

|![A graph and a spanning tree](/img/tutorial/graph_algorithms/35.png)|
|:--:|
| **Fig. 35:** A graph and a spanning tree |

## Minimum Spanning Tree

A minimum spanning tree is a spanning tree whose weight is as small as possible. Fig. 36 shows a minimum spanning tree for our example graph with weight 20. In a similar way, a maximum spanning tree is a spanning tree whose weight is as large as possible. Fig. 37 shows a maximum spanning tree for our example graph with weight 32. Note that a graph may have several minimum and maximum spanning trees, so the trees are not unique.

|![A minimum spanning tree with weight 20](/img/tutorial/graph_algorithms/36.png)|
|:--:|
| **Fig. 36:** A minimum spanning tree with weight 20 |

|![A maximum spanning tree with weight 32](/img/tutorial/graph_algorithms/37.png)|
|:--:|
| **Fig. 37:** A maximum spanning tree with weight 32 |

It turns out that several greedy methods can be used to construct minimum and maximum spanning trees. This section discusses two algorithms that process the edges of the graph ordered by their weights. We focus on finding minimum spanning trees, but the same algorithms can also find maximum spanning trees by processing the edges in reverse order.
