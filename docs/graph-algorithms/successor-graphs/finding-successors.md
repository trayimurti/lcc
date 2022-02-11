---
sidebar_position: 2
tags: ['successor-graphs', 'finding-successor']
---

# Finding Successor

Since each node of a successor graph has a unique successor, we can also define a function `succ(x, k)` that gives the node that we will reach if we begin at node `x` and walk `k` steps forward. For example, in our example graph `succ(4, 6) = 2`, because we will reach node 2 by walking 6 steps from node 4 (Fig. 33).

|![Walking in a successor graph](/img/tutorial/graph_algorithms/33.png)|
|:--:|
| **Fig. 33:** Walking in a successor graph |

A straightforward way to calculate a value of `succ(x, k)` is to start at node `x` and walk `k` steps forward, which takes $\cal{O}(k)$ time. However, using preprocessing, any value of `succ(x, k)` can be calculated in only $\cal{O}(\log k)$ time.

Let `u` denote the maximum number of steps we will ever walk. The idea is to precalculate all values of `succ(x, k)` where `k` is a power of two and at most `u`. This can be efficiently done, because we can use the following recurrence:

$$
succ(x, k) =
\begin{cases}
succ(x) & k = 1 \\
succ(succ(x, k/2), k/2) & k > 1
\end{cases}
$$

The idea is that a path of length `k` that begins at node `x` can be divided into two paths of length `k/2`. Precalculating all values of `succ(x, k)` where `k` is a power of two and at most `u` takes $\cal{O}(n \cdot \log u)$ time, because $\cal{O}(\log u)$ values are calculated for each node. In our example graph, the first values are as follows:

$$
\begin{array}{l|c} 
x & \text{1 2 3 4 5 6 7 8 9} \\ 
\hline
succ(x, 1) & \text{3 5 7 6 2 2 1 6 3} \\
succ(x, 2) & \text{7 2 1 2 5 5 3 2 7} \\
succ(x, 3) & \text{3 2 7 2 5 5 1 2 3} \\
succ(x, 4) & \text{7 2 1 2 5 5 3 2 7} \\
... & ... 
\end{array} 
$$

After the precalculation, any value of `succ(x, k)` can be calculated by presenting `k` as a sum of powers of two. Such a representation always consists of $\cal{O}(\log k)$ parts, so calculating a value of `succ(x, k)` takes $\cal{O}(\log k)$ time. For example, if we want to calculate the value of `succ(x, 11)`, we use the formula

$$
succ(x, 11) = succ(succ(succ(x, 8), 2), 1).
$$

In our example graph,

$$
succ(4, 11) = succ(succ(succ(4, 8), 2), 1) = 5.
$$