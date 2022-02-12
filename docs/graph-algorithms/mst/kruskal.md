---
sidebar_position: 2
tags: ['mst', 'kruskal']
---

# Kruskal's Algorithm

Kruskal’s algorithm builds a minimum spanning tree by greedily adding edges to the graph. The initial spanning tree only contains the nodes of the graph and does not contain any edges. Then the algorithm goes through the edges ordered by their weights and always adds an edge to the graph if it does not create a cycle.

The algorithm maintains the components of the graph. Initially, each node of the graph belongs to a separate component. Always when an edge is added to the graph, two components are joined. Finally, all nodes belong to the same component, and a minimum spanning tree has been found.

|![A graph and a spanning tree](/img/tutorial/graph_algorithms/35.png)|
|:--:|
| **Fig. 35:** A graph and a spanning tree |

As an example, let us construct a minimum spanning tree for our example graph (Fig. 35). The first step is to sort the edges in increasing order of their weights:

$$
\begin{array}{l|c} 
edge & weight \\ 
\hline
5-6 & 2 \\
1-2 & 3 \\
3-6 & 3 \\
1-5 & 5 \\
2-3 & 5 \\
2-5 & 6 \\
4-6 & 7 \\
3-4 & 9  
\end{array} 
$$

Then, we go through the list and add each edge to the graph if it joins two separate components. Fig. 38 shows the steps of the algorithm. Initially, each node belongs to its own component. Then, the first edges on the list ($5–6$, $1–2$, $3–6$, and $1–5$) are added to the graph. After this, the next edge would be $2–3$, but this edge is not added, because it would create a cycle. The same applies to edge $2–5$. Finally, the edge $4–6$ is added, and the minimum spanning tree is ready.



When implementing Kruskal’s algorithm, it is convenient to use the edge list representation of the graph. The first phase of the algorithm sorts the edges in the list in $\cal{O}(m \cdot \log m)$ time. After this, the second phase of the algorithm builds the minimum spanning tree as follows:

```cpp
for (...) {
	if (!same(a,b)) unite(a,b);
}
```

The loop goes through the edges in the list and always processes an edge `(a, b)` where `a` and `b` are two nodes. Two functions are needed: the function same determines if `a` and `b` are in the same component, and the function unite joins the components that contain `a` and `b`.

The problem is how to efficiently implement the functions same and unite. One possibility is to implement the function same as a graph traversal and check if we can get from node `a` to node `b`. However, the time complexity of such a function would be $\cal{O}(n + m)$ and the resulting algorithm would be slow, because the function same will be called for each edge in the graph.

We will solve the problem using a union-find structure that implements both functions in $\cal{O}(\log n)$ time. Thus, the time complexity of Kruskal’s algorithm will be $\cal{O}(m \cdot \log n)$ after sorting the edge list.