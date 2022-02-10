---
slug: ioitc-day-1-part-2
title: IOITC Day-1 Part-2
authors: trayimurti
tags: [ioitc,ioi,sliding-window-algorithm,day-1,part-2]
---

So, What if the numbers can also be negative? 

We can't use sliding window algorithm then. First we will compute prefix sum and then sort it with their respective index (sort them as **{prefixL[i],i}**). Then we will apply binary search on it for every index **i** to look for an element whose index **j** is greater than index **i** and whose value is equal to **prefixL[i] + K**. This will take $\cal{O}(n \cdot \log(n))$ time.

<!--truncate-->

## Problem

Given a list of integers **L = [A<sub>1</sub>, A<sub>2</sub>, A<sub>3</sub>, …, A<sub>N</sub>]**. Where **A<sub>i</sub> ∈ I**, **0 ≤ i ≤ N**. You have to find the shortest contiguous segment in the list which adds up to a given integer **K**. If there are more than one such segments, print one of them.

For example, 
If  **L = [2, 1, 10, 1, 3, -4, -2, 20, 5, 5, 5, 1, 1]** and **K = 17**, the answer would be **{4, 7}**.

## Code

```cpp
struct keycompare {
   bool operator()(const pair<int, int>& v, const int& k) {
      return (v.first < k);
   }
   bool operator()(const int& k, const pair<int, int>& v) {
      return (k < v.first);
   }
};

pair<int,int> prefixSum(vector<int> l, int n, int k){
    int st,en,len = INF;
    vector<pair<int,int>> prefixL(n+1);
    prefixL[0].first = 0;
    prefixL[0].second = 0;
    for(int i=0;i<n;i++){
        prefixL[i+1].first = prefixL[i].first + l[i];
        prefixL[i+1].second = i+1;
    }
    for(int i=0;i<n;i++){
        int x = lower_bound(prefixL.begin(), prefixL.end(), prefixL[i].first + k, keycompare()) - prefixL.begin();
        if(x <= n && prefixL[x].first == prefixL[i].first + k && x-i < len && prefixL[x].second > prefixL[i].second){
            len = x-i;
            en = x-1;
            st = i;
        }
    }
    return {st,en};
}
```

Let's make the problem even more interesting.

## Problem

Given a list of integers **L = [A<sub>1</sub>, A<sub>2</sub>, A<sub>3</sub>, …, A<sub>N</sub>]**. Where **A<sub>i</sub> ≥ 0**, **0 ≤ i ≤ N**. You have to find a pair of the shortest disjoint contiguous segment in the list each adding up to a given integer **K** and sum of size of segment is minimum. If there are more than one such pair of segments, print one of such pair.

For example,
If  **L = [2, 1, 3, 1, 4, 4, 1, 8, 1, 7]** and **K = 9**, the answer would be **{{3, 5}, {6, 7}}**.

## Solution

Note that pairs of segments have to be disjoint. So, we can't simply say that the segments with least size will be the answer. Even in the given example **{6, 7}** and **{7, 8}** are two least size segments, but they have a common index which doesn't follow the condition of being disjoint. Then, what should we do?

Let us take an index **i**, for each i we will find the least size segment in range **[0, i]** and **(i, N)**. Doing this will ensure that the segments are disjoint. As far as searching segment in the ranges concerned, we can find them by applying sliding window algorithm from both the sides.

### Code
```cpp
void slidingWindow(vector<int> l, int n, int k){
    int st = -1,en = -1,len = INF;
    vector<pair<int,int>> s1(n,{-1,-1}),s2(n,{-1,-1});
    int sum = l[0];
    // sliding window from front
    for(int i=0,j=0;i<n && j<n;){
        s1[j] = {st, en};
        if(sum < k){
            j++;
            if(j < n)   sum += l[j];
            else        break;
            
        }else if(sum > k){
            sum -= l[i];
            if(i < j)   i++;
            else{
                i++;
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
            s1[j] = {st, en};
            if(j < n)   sum += l[j];
            else        break;
        }
    }
    sum = l[n-1];
    len = INF;
    st = -1;en = -1;
    // sliding window from end
    for(int i=n-1,j=n-1;i>=0 && j>=0;){
        s2[i] = {st, en};
        if(sum < k){
            i--;
            if(i >= 0)   sum += l[i];
            else        break;
            
        }else if(sum > k){
            sum -= l[j];
            if(i < j)   j--;
            else{
                i--;
                j--;
                sum += l[i];
            }
        }else{
            if(j-i+1 < len){
                st = i;
                en = j;
                len = j-i+1;
            }
            s2[i] = {st, en};
            i--;
            if(i >= 0)   sum += l[i];
            else        break;
        }
    }
    len = INF;
    for(int i=0;i<n-1;i++){
        if(s1[i].first != -1 && s2[i+1].first != -1){
            if(((s1[i].second + s2[i+1].second + 2) - (s1[i].first + s2[i+1].first)) < len){
                ans[0] = s1[i];
                ans[1] = s2[i+1];
            }
        }
    }
}
```