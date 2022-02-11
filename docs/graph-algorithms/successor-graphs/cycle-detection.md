---
sidebar_position: 3
tags: ['successor-graphs', 'cycle-detection']
---

# Cycle Detection

Consider a successor graph that only contains a path that ends in a cycle. We may ask the following questions: if we begin our walk at the starting node, what is the first node in the cycle and how many nodes does the cycle contain? For example, in Fig. 34, we begin our walk at node 1, the first node that belongs to the cycle is node 4, and the cycle consists of three nodes (4, 5, and 6).

|![A cycle in a successor graph](/img/tutorial/graph_algorithms/34.png)|
|:--:|
| **Fig. 34:** A cycle in a successor graph |

A simple way to detect the cycle is to walk in the graph and keep track of all nodes that have been visited. Once a node is visited for the second time, we can conclude that the node is the first node in the cycle. This method works in $\cal{O}(n)$ time and also uses $\cal{O}(n)$ memory. However, there are better algorithms for cycle detection. The time complexity of such algorithms is still $\cal{O}(n)$, but they only use $\cal{O}(1)$ memory, which may be an important improvement if `n` is large.

One such algorithm is Floyd’s algorithm, which walks in the graph using two pointers `a` and `b`. Both pointers begin at the starting node `x`. Then, on each turn, the pointer `a` walks one step forward and the pointer `b` walks two steps forward. The process continues until the pointers meet each other:

```cpp
a = succ(x);
b = succ(succ(x));
while (a != b) {
	a = succ(a);
	b = succ(succ(b));
}
```

At this point, the pointer a has walked k steps and the pointer b has walked 2k steps, so the length of the cycle divides k. Thus, the first node that belongs to the cycle can be found by moving the pointer a to node x and advancing the pointers step by step until they meet again.

```cpp
a = x;
while (a != b) {
	a = succ(a);
	b = succ(b);
}
first = a;
```

After this, the length of the cycle can be calculated as follows:

```cpp
b = succ(a);
length = 1;
while (a != b) {
	b = succ(b);
	length++;
}
```