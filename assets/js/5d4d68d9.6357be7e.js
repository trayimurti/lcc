"use strict";(self.webpackChunklcc=self.webpackChunklcc||[]).push([[6773],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,u=m["".concat(p,".").concat(d)]||m[d]||h[d]||s;return a?r.createElement(u,i(i({ref:t},l),{},{components:a})):r.createElement(u,i({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1207:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=a(7462),n=a(3366),s=(a(7294),a(3905)),i=["components"],o={sidebar_position:2,tags:["graph","graph-traversal","bfs"]},p="Breadth-First Search (BFS)",c={unversionedId:"graph-algorithms/graph-traversal/bfs",id:"graph-algorithms/graph-traversal/bfs",title:"Breadth-First Search (BFS)",description:"Breadth-first search (BFS) visits the nodes of a graph in increasing order of their distance from the starting node. Thus, we can calculate the distance from the starting node to all other nodes using breadth-first search. However, breadth-first search is more difficult to implement than depth-first search.",source:"@site/docs/graph-algorithms/graph-traversal/bfs.md",sourceDirName:"graph-algorithms/graph-traversal",slug:"/graph-algorithms/graph-traversal/bfs",permalink:"/lcc/docs/graph-algorithms/graph-traversal/bfs",editUrl:"https://github.com/trayimurti/lcc/tree/main/docs/graph-algorithms/graph-traversal/bfs.md",tags:[{label:"graph",permalink:"/lcc/docs/tags/graph"},{label:"graph-traversal",permalink:"/lcc/docs/tags/graph-traversal"},{label:"bfs",permalink:"/lcc/docs/tags/bfs"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["graph","graph-traversal","bfs"]},sidebar:"tutorialSidebar",previous:{title:"Depth-First Search (DFS)",permalink:"/lcc/docs/graph-algorithms/graph-traversal/dfs"}},l=[{value:"Implementation",id:"implementation",children:[],level:2}],h={toc:l};function m(e){var t=e.components,o=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"breadth-first-search-bfs"},"Breadth-First Search (BFS)"),(0,s.kt)("p",null,"Breadth-first search (BFS) visits the nodes of a graph in increasing order of their distance from the starting node. Thus, we can calculate the distance from the starting node to all other nodes using breadth-first search. However, breadth-first search is more difficult to implement than depth-first search."),(0,s.kt)("h1",{id:"algorithm"},"Algorithm"),(0,s.kt)("p",null,"Breadth-first search goes through the nodes one level after another. First the search explores the nodes whose distance from the starting node is 1, then the nodes whose distance is 2, and so on. This process continues until all nodes have been visited."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"Breadth-First Search",src:a(6070).Z,width:"200",height:"200"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 14:")," Breadth-First Search")))),(0,s.kt)("p",null,"Figure 14 shows how breadth-first search processes a graph. Suppose that the search begins at node 1. First the search visits nodes 2 and 4 with distance 1, then nodes 3 and 5 with distance 2, and finally node 6 with distance 3."),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)("p",null,"Breadth-first search is more difficult to implement than depth-first search, because the algorithm visits nodes in different parts of the graph. A typical implementation is based on a queue that contains nodes. At each step, the next node in the queue will be processed."),(0,s.kt)("p",null,"The queue ",(0,s.kt)("inlineCode",{parentName:"p"},"q")," contains nodes to be processed in increasing order of their distance. New nodes are always added to the end of the queue, and the node at the beginning of the queue is the next node to be processed. The array visited indicates which nodes the search has already visited, and the array distance will contain the distances from the starting node to all nodes of the graph."),(0,s.kt)("p",null,"The search can be implemented as follows, starting at node ",(0,s.kt)("inlineCode",{parentName:"p"},"x"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"queue<int> q;\nbool visited[N];\nint distance[N];\nvisited[x] = true;\ndistance[x] = 0;\nq.push(x);\nwhile (!q.empty()) {\n    int s = q.front(); q.pop();\n    // process node s\n    for (auto u : adj[s]) {\n        if (visited[u]) continue;\n        visited[u] = true;\n        distance[u] = distance[s]+1;\n        q.push(u);\n    }\n}\n")),(0,s.kt)("p",null,"Like in depth-first search, the time complexity of breadth-first search is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(n+m)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),", where ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," is the number of nodes and ",(0,s.kt)("inlineCode",{parentName:"p"},"m")," is the number of edges."))}m.isMDXComponent=!0},6070:function(e,t,a){t.Z=a.p+"assets/images/14-26d2fc5b2dfdd805b22d7958db6e57e4.gif"}}]);