---
sidebar_position: 1
tags: ['graph','dag', 'topological-sort']
---

# Topological Sorting

| ![A graph and topological sort](/img/tutorial/graph_algorithms/24.png) |
|:--:|
| **Fig. 24:** A graph and topological sort |

A topological sort is an ordering of the nodes of a directed graph such that if there is a path from node a to node b, then node a appears before node b in the ordering. For example, in Fig. 24, one possible topological sort is [4, 1, 5, 2, 3, 6].

A directed graph has a topological sort exactly when it is acyclic. If the graph contains a cycle, it is not possible to form a topological sort, because no node of the cycle can appear before the other nodes of the cycle in the ordering. It turns out that depth-first search can be used to both check if a directed graph contains a cycle and, if it does not, to construct a topological sort.

## Idea

The idea is to go through the nodes of the graph and always begin a depth-first search at the current node if it has not been processed yet. During the searches, the nodes have three possible states:

- State 0: the node has not been processed (white)
- State 1: the node is under processing (light gray)
- State 2: the node has been processed (dark gray)

Initially, the state of each node is 0. When a search reaches a node for the first time, its state becomes 1. Finally, after all edges from the node have been processed, its state becomes 2.

If the graph contains a cycle, we will discover this during the search, because sooner or later we will arrive at a node whose state is 1. In this case, it is not possible to construct a topological sort. If the graph does not contain a cycle, we can construct a topological sort by adding each node to a list when its state becomes 2. Finally, we reverse the list and get a topological sort for the graph.

## Example

Now we are ready to construct a topological sort for our example graph. The first search (Fig. 25) proceeds from node 1 to node 6, and adds nodes 6, 3, 2, and 1 to the list. Then, the second search (Fig. 26) proceeds from node 4 to node 5 and adds nodes 5 and 4 to the list. The final reversed list is [4, 5, 1, 2, 3, 6], which corresponds to a topological sort (Fig. 27). 

:::info NOTE 
Topological sort is not unique; there can be several topological sorts for a graph.
:::

| ![The first search adds nodes 6, 3, 2, and 1 to the list](/img/tutorial/graph_algorithms/25.png) |
|:--:|
| **Fig. 25:** The first search adds nodes 6, 3, 2, and 1 to the list |

| ![The second search adds nodes 5 and 4 to the list](/img/tutorial/graph_algorithms/26.png) |
|:--:|
| **Fig. 26:** The second search adds nodes 5 and 4 to the list |

| ![The final topological sort](/img/tutorial/graph_algorithms/27.png) |
|:--:|
| **Fig. 27:** The final topological sort |

Fig. 28 shows a graph that does not have a topological sort. During the search, we reach node 2 whose state is 1, which means that the graph contains a cycle. Indeed, there is a cycle $2 \to 3 \to 5 \to 2$.

| ![This graph does not have a topological sort, because it contains a cycle](/img/tutorial/graph_algorithms/28.png) |
|:--:|
| **Fig. 28:** This graph does not have a topological sort, because it contains a cycle |

## Code

```cpp
void dfs(vector<int>* adj, vector<int>& visited, vector<int>& topoSort, int idx){
    visited[idx] = true;
    for(int u : adj[idx]){
        if(!visited[u])
            dfs(adj, visited, topoSort, u);
    }
    topoSort.push_back(idx);
}

vector<int> topologicalSort(vector<int>* adj, vector<int>& visited, int N){
    vector<int> topoSort;
    for(int i=1;i<=N;i++)
        if(!visited[i])
            dfs(adj, visited, topoSort, i);
    reverse(topoSort.begin(), topoSort.end());
    return topoSort;
}
```