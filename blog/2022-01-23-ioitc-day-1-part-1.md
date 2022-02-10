---
slug: ioitc-day-1-part-1
title: IOITC Day-1 Part-1
authors: trayimurti
tags: [ioitc,ioi,sliding-window-algorithm,day-1,part-1]
---

Let us start with a problem

## Problem

Given a list of integers **L = [A<sub>1</sub>, A<sub>2</sub>, A<sub>3</sub>, …, A<sub>N</sub>]**. Where **A<sub>i</sub> ≥ 0**, **0 ≤ i ≤ N**. You have to find the shortest contiguous segment in the list which adds up to a given integer **K**. If there are more than one such segment, print one of them.

<!--truncate-->

For example, 
If  **L = [2, 1, 3, 1, 4, 4, 1, 8, 1, 7]** and **K = 9**, the answer would be **{6, 7}**.

## By Naive Approach

Find every possible segment and sum up elements present in it. This will have $\cal{O}(n^2)$ time complexity.

### Code

```cpp
pair<int,int> naive(vector<int> l, int n, int k){
	int st,en,len = INF;
	for(int i=0;i<n;i++){
		int sum = 0;
		for(int j=i;j<n;j++){
			sum += l[j];
			if(sum == k && j-i+1 < len){
				len = j-i+1;
				st = i;
				en = j;
				break;
			}
			if(sum > k){
				break;
			}
		}
	}
	return {st,en};
}
```

Can we do better?

## By Prefix Sum

Compute the prefix sum of array **L** into another array **prefixL** (make sure to add an extra element "0" before the list) , for every index **i** in **prefixL**, search if an element exists with value **prefixL[i] + K** and return the indices of the segment with minimum length. We can search for elements with the help of Binary Search, which will take $\cal{O}(\log(n))$ time. So, overall it will have $\cal{O}(n \cdot \log(n))$ time complexity.

### Code

```cpp
pair<int,int> prefixSum(vector<int> l, int n, int k){
    int st,en,len = INF;
    vector<int> prefixL(n+1);
    prefixL[0] = 0;
    for(int i=0;i<n;i++)
        prefixL[i+1] = prefixL[i] + l[i];
    for(int i=0;i<n;i++){
        int x = lower_bound(prefixL.begin(), prefixL.end(), prefixL[i] + k) - prefixL.begin();
        if(x <= n && prefixL[x] == prefixL[i] + k && x-i < len){
            len = x-i;
            en = x-1;
            st = i;
        }
    }
    return {st,en};
}
```

Can we still do better?

## By Sliding Window Algorithm

As the name suggests, we will use two vectors **i** and **j** to point at starting and ending elements of the segment respectively. If the current sum of the segment is less than **K** then increase the index **j** and include the element in the sum. If the current sum of the segment is greater than K then increase the index **i** and exclude the from the sum. When the current segment sum is equal to **K**, store the indices if the segment length is less than the previous one. As the array is iterated once, So, time complexity will be $\cal{O}(n)$. 

### Code

```cpp
pair<int,int> slidingWindow(vector<int> l, int n, int k){
    int st,en,len = INF;
    int sum = l[0];
    for(int i=0,j=0;i<n && j<n;){
        if(sum < k){
            j++;
            if(j < n)   sum += l[j];
            else        break;
        }else if(sum > k){
            sum -= l[i];
            if(i < j)   i++;
            else{
                j++;
                sum += l[j];
            }
        }else{
            if(j-i+1 < len){
                st = i;
                en = j;
                len = j-i+1;
            }
            j++;
            if(j < n)   sum += l[j];
            else        break;
        }
    }
    return {st,en};
}
```

:::note Note
Some conditions were added in the code to ensure that **i ≤ j** and **j < n**.
:::

What if the numbers can also be negative?