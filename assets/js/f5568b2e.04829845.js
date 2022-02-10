"use strict";(self.webpackChunklcc=self.webpackChunklcc||[]).push([[637],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),f=r,g=u["".concat(l,".").concat(f)]||u[f]||c[f]||i;return t?a.createElement(g,s(s({ref:n},m),{},{components:t})):a.createElement(g,s({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9198:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return m},toc:function(){return c},default:function(){return f}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),s=["components"],o={slug:"ioitc-day-1-part-2",title:"IOITC Day-1 Part-2",authors:"trayimurti",tags:["ioitc","ioi","sliding-window-algorithm","day-1","part-2"]},l=void 0,p={permalink:"/blog/ioitc-day-1-part-2",editUrl:"https://github.com/trayimurti/lcc/blog/2022-01-24-ioitc-day-1-part-2.md",source:"@site/blog/2022-01-24-ioitc-day-1-part-2.md",title:"IOITC Day-1 Part-2",description:"So, What if the numbers can also be negative?",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[{label:"ioitc",permalink:"/blog/tags/ioitc"},{label:"ioi",permalink:"/blog/tags/ioi"},{label:"sliding-window-algorithm",permalink:"/blog/tags/sliding-window-algorithm"},{label:"day-1",permalink:"/blog/tags/day-1"},{label:"part-2",permalink:"/blog/tags/part-2"}],readingTime:3.49,truncated:!0,authors:[{name:"Trayi Murti",title:"IOI Training Camp Participant",url:"https://github.com/trayimurti",imageURL:"https://github.com/trayimurti.png",key:"trayimurti"}],frontMatter:{slug:"ioitc-day-1-part-2",title:"IOITC Day-1 Part-2",authors:"trayimurti",tags:["ioitc","ioi","sliding-window-algorithm","day-1","part-2"]},prevItem:{title:"IOITC Day-1 Part-3",permalink:"/blog/ioitc-day-1-part-3"},nextItem:{title:"IOITC Day-1 Part-1",permalink:"/blog/ioitc-day-1-part-1"}},m={authorsImageUrls:[void 0]},c=[{value:"Problem",id:"problem",children:[],level:2},{value:"Code",id:"code",children:[],level:2},{value:"Problem",id:"problem-1",children:[],level:2},{value:"Solution",id:"solution",children:[{value:"Code",id:"code-1",children:[],level:3}],level:2}],u={toc:c};function f(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So, What if the numbers can also be negative? "),(0,i.kt)("p",null,"We can't use sliding window algorithm then. First we will compute prefix sum and then sort it with their respective index (sort them as ",(0,i.kt)("strong",{parentName:"p"},"{prefixL","[i]",",i}"),"). Then we will apply binary search on it for every index ",(0,i.kt)("strong",{parentName:"p"},"i")," to look for an element whose index ",(0,i.kt)("strong",{parentName:"p"},"j")," is greater than index ",(0,i.kt)("strong",{parentName:"p"},"i")," and whose value is equal to ",(0,i.kt)("strong",{parentName:"p"},"prefixL","[i]"," + K"),". This will take ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,i.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,i.kt)("mi",{parentName:"mrow"},"log"),(0,i.kt)("mo",{parentName:"mrow"},"\u2061"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,i.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(n \\cdot \\log(n))")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mop"},"lo",(0,i.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,i.kt)("span",{parentName:"span",className:"mopen"},"("),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,i.kt)("span",{parentName:"span",className:"mclose"},"))"))))))," time."),(0,i.kt)("h2",{id:"problem"},"Problem"),(0,i.kt)("p",null,"Given a list of integers ",(0,i.kt)("strong",{parentName:"p"},"L = ","[A",(0,i.kt)("sub",null,"1"),", A",(0,i.kt)("sub",null,"2"),", A",(0,i.kt)("sub",null,"3"),", \u2026, A",(0,i.kt)("sub",null,"N"),"]"),". Where ",(0,i.kt)("strong",{parentName:"p"},"A",(0,i.kt)("sub",null,"i")," \u2208 I"),", ",(0,i.kt)("strong",{parentName:"p"},"0 \u2264 i \u2264 N"),". You have to find the shortest contiguous segment in the list which adds up to a given integer ",(0,i.kt)("strong",{parentName:"p"},"K"),". If there are more than one such segments, print one of them."),(0,i.kt)("p",null,"For example,\nIf  ",(0,i.kt)("strong",{parentName:"p"},"L = ","[2, 1, 10, 1, 3, -4, -2, 20, 5, 5, 5, 1, 1]")," and ",(0,i.kt)("strong",{parentName:"p"},"K = 17"),", the answer would be ",(0,i.kt)("strong",{parentName:"p"},"{4, 7}"),"."),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct keycompare {\n   bool operator()(const pair<int, int>& v, const int& k) {\n      return (v.first < k);\n   }\n   bool operator()(const int& k, const pair<int, int>& v) {\n      return (k < v.first);\n   }\n};\n\npair<int,int> prefixSum(vector<int> l, int n, int k){\n    int st,en,len = INF;\n    vector<pair<int,int>> prefixL(n+1);\n    prefixL[0].first = 0;\n    prefixL[0].second = 0;\n    for(int i=0;i<n;i++){\n        prefixL[i+1].first = prefixL[i].first + l[i];\n        prefixL[i+1].second = i+1;\n    }\n    for(int i=0;i<n;i++){\n        int x = lower_bound(prefixL.begin(), prefixL.end(), prefixL[i].first + k, keycompare()) - prefixL.begin();\n        if(x <= n && prefixL[x].first == prefixL[i].first + k && x-i < len && prefixL[x].second > prefixL[i].second){\n            len = x-i;\n            en = x-1;\n            st = i;\n        }\n    }\n    return {st,en};\n}\n")),(0,i.kt)("p",null,"Let's make the problem even more interesting."),(0,i.kt)("h2",{id:"problem-1"},"Problem"),(0,i.kt)("p",null,"Given a list of integers ",(0,i.kt)("strong",{parentName:"p"},"L = ","[A",(0,i.kt)("sub",null,"1"),", A",(0,i.kt)("sub",null,"2"),", A",(0,i.kt)("sub",null,"3"),", \u2026, A",(0,i.kt)("sub",null,"N"),"]"),". Where ",(0,i.kt)("strong",{parentName:"p"},"A",(0,i.kt)("sub",null,"i")," \u2265 0"),", ",(0,i.kt)("strong",{parentName:"p"},"0 \u2264 i \u2264 N"),". You have to find a pair of the shortest disjoint contiguous segment in the list each adding up to a given integer ",(0,i.kt)("strong",{parentName:"p"},"K")," and sum of size of segment is minimum. If there are more than one such pair of segments, print one of such pair."),(0,i.kt)("p",null,"For example,\nIf  ",(0,i.kt)("strong",{parentName:"p"},"L = ","[2, 1, 3, 1, 4, 4, 1, 8, 1, 7]")," and ",(0,i.kt)("strong",{parentName:"p"},"K = 9"),", the answer would be ",(0,i.kt)("strong",{parentName:"p"},"{{3, 5}, {6, 7}}"),"."),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Note that pairs of segments have to be disjoint. So, we can't simply say that the segments with least size will be the answer. Even in the given example ",(0,i.kt)("strong",{parentName:"p"},"{6, 7}")," and ",(0,i.kt)("strong",{parentName:"p"},"{7, 8}")," are two least size segments, but they have a common index which doesn't follow the condition of being disjoint. Then, what should we do?"),(0,i.kt)("p",null,"Let us take an index ",(0,i.kt)("strong",{parentName:"p"},"i"),", for each i we will find the least size segment in range ",(0,i.kt)("strong",{parentName:"p"},"[0, i]")," and ",(0,i.kt)("strong",{parentName:"p"},"(i, N)"),". Doing this will ensure that the segments are disjoint. As far as searching segment in the ranges concerned, we can find them by applying sliding window algorithm from both the sides."),(0,i.kt)("h3",{id:"code-1"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void slidingWindow(vector<int> l, int n, int k){\n    int st = -1,en = -1,len = INF;\n    vector<pair<int,int>> s1(n,{-1,-1}),s2(n,{-1,-1});\n    int sum = l[0];\n    // sliding window from front\n    for(int i=0,j=0;i<n && j<n;){\n        s1[j] = {st, en};\n        if(sum < k){\n            j++;\n            if(j < n)   sum += l[j];\n            else        break;\n            \n        }else if(sum > k){\n            sum -= l[i];\n            if(i < j)   i++;\n            else{\n                i++;\n                j++;\n                sum += l[j];\n            }\n        }else{\n            if(j-i+1 < len){\n                st = i;\n                en = j;\n                len = j-i+1;\n            }\n            j++;\n            s1[j] = {st, en};\n            if(j < n)   sum += l[j];\n            else        break;\n        }\n    }\n    sum = l[n-1];\n    len = INF;\n    st = -1;en = -1;\n    // sliding window from end\n    for(int i=n-1,j=n-1;i>=0 && j>=0;){\n        s2[i] = {st, en};\n        if(sum < k){\n            i--;\n            if(i >= 0)   sum += l[i];\n            else        break;\n            \n        }else if(sum > k){\n            sum -= l[j];\n            if(i < j)   j--;\n            else{\n                i--;\n                j--;\n                sum += l[i];\n            }\n        }else{\n            if(j-i+1 < len){\n                st = i;\n                en = j;\n                len = j-i+1;\n            }\n            s2[i] = {st, en};\n            i--;\n            if(i >= 0)   sum += l[i];\n            else        break;\n        }\n    }\n    len = INF;\n    for(int i=0;i<n-1;i++){\n        if(s1[i].first != -1 && s2[i+1].first != -1){\n            if(((s1[i].second + s2[i+1].second + 2) - (s1[i].first + s2[i+1].first)) < len){\n                ans[0] = s1[i];\n                ans[1] = s2[i+1];\n            }\n        }\n    }\n}\n")))}f.isMDXComponent=!0}}]);