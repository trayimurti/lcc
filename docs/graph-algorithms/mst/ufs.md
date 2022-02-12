---
sidebar_position: 3
tags: ['mst', 'ufs']
---

# Union-Find Structure

A union-find structure maintains a collection of sets. The sets are disjoint, so no element belongs to more than one set. Two $\cal{O}(\log n)$ time operations are supported: the unite operation joins two sets, and the find operation finds the representative of the set that contains a given element.

In a union-find structure, one element in each set is the representative of the set, and there is a path from any other element of the set to the representative.

## Example

For example, assume that the sets are {1, 4, 7}, {5} and {2, 3, 6, 8}. Fig. 41 shows one way to represent these sets.

|![A union-find structure with three sets](/img/tutorial/graph_algorithms/41.png)|
|:--:|
| **Fig. 41:** A union-find structure with three sets |

### Find

In this case the representatives of the sets are 4, 5, and 2. We can find the representative of any element by following the path that begins at the element. For example, the element 2 is the representative for the element 6, because we follow the path $6 \to 3 \to 2.$ Two elements belong to the same set exactly when their representatives are the same.

### Union

To join two sets, the representative of one set is connected to the representative of the other set. For example, Fig. 42 shows a possible way to join the sets {1, 4, 7} and {2, 3, 6, 8}. From this on, the element 2 is the representative for the entire set and the old representative 4 points to the element 2.

|![Joining two sets into a single set](/img/tutorial/graph_algorithms/42.png)|
|:--:|
| **Fig. 42:** Joining two sets into a single set |

The efficiency of the union-find structure depends on how the sets are joined. It turns out that we can follow a simple strategy: always connect the representative of the smaller set to the representative of the larger set (or if the sets are of equal size, we can make an arbitrary choice). Using this strategy, the length of any path will be $\cal{O}(\log n)$, so we can find the representative of any element efficiently by following the corresponding path.

## Implementation

The union-find structure can be conveniently implemented using arrays. In the following implementation, the array link indicates for each element the next element in the path, or the element itself if it is a representative, and the array size indicates for each representative the size of the corresponding set. Initially, each element belongs to a separate set:

```cpp
for (int i = 1; i <= n; i++) link[i] = i;
for (int i = 1; i <= n; i++) size[i] = 1;
```

The function find returns the representative for an element `x`. The representative can be found by following the path that begins at `x`.

```cpp
int find(int x) {
	while (x != link[x]) x = link[x];
	return x;
}
```

The function same checks whether elements `a` and `b` belong to the same set. This can easily be done by using the function find:

```cpp
bool same(int a, int b) {
	return find(a) == find(b);
}
```

The function unite joins the sets that contain elements `a` and `b` (the elements have to be in different sets). The function first finds the representatives of the sets and then connects the smaller set to the larger set.

```cpp
void unite(int a, int b) {
	a = find(a);
	b = find(b);
	if (size[a] < size[b]) swap(a,b);
	size[a] += size[b];
	link[b] = a;
}
```

The time complexity of the function find is $\cal{O}(\log n)$ assuming that the length
of each path is $\cal{O}(\log n)$. In this case, the functions same and unite also work
in $\cal{O}(\log n)$ time. The function unite makes sure that the length of each path is
$\cal{O}(\log n)$ by connecting the smaller set to the larger set.

## Path Compression

Here is an alternative way to implement the find operation:

```cpp
int find(int x) {
	if (x == link[x]) return x;
	return link[x] = find(link[x]);
}
```

This function uses path compression: each element in the path will directly point to its representative after the operation. It can be shown that using this function, the union-find operations work in amortized $\cal{O}(\alpha(n))$ time, where $\alpha(n)$ is the inverse Ackermann function which grows very slowly (it is almost a constant). However, path compression cannot be used in some applications of the union-find structure, such as in the dynamic connectivity algorithm.