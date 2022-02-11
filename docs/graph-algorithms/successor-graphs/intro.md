---
sidebar_position: 1
---

# Introduction

## Successor Graphs

Another special class of directed graphs are successor graphs. In those graphs, the outdegree of each node is 1, i.e., each node has a unique successor. A successor graph consists of one or more components, each of which contains one cycle and some paths that lead to it.

Successor graphs are sometimes called functional graphs, because any successor graph corresponds to a function succ(x) that defines the edges of the graph. The parameter x is a node of the graph, and the function gives the successor of the node. 

## Example

For example, the function

$$
\begin{array}{l|c} 
x & \text{1 2 3 4 5 6 7 8 9} \\ 
\hline
succ(x) & \text{3 5 7 6 2 2 1 6 3}
\end{array} 
$$

defines the graph in Fig. 32.

|![A successor graph](/img/tutorial/graph_algorithms/32.png)|
|:--:|
| **Fig. 32:** A successor graph |
