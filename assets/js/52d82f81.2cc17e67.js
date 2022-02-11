"use strict";(self.webpackChunklcc=self.webpackChunklcc||[]).push([[32],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return u}});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,s=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),h=i(t),u=r,N=h["".concat(o,".").concat(u)]||h[u]||c[u]||s;return t?n.createElement(N,m(m({ref:e},l),{},{components:t})):n.createElement(N,m({ref:e},l))}));function u(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var s=t.length,m=new Array(s);m[0]=h;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=a,p.mdxType="string"==typeof a?a:r,m[1]=p;for(var i=2;i<s;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2742:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return h}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),m=["components"],p={sidebar_position:3,tags:["graph","shortest-paths","bellman-ford","spfa"]},o="Shortest Path Faster Algorithm (SPFA)",i={unversionedId:"graph-algorithms/shortest-paths/spfa",id:"graph-algorithms/shortest-paths/spfa",title:"Shortest Path Faster Algorithm (SPFA)",description:"Algorithm",source:"@site/docs/graph-algorithms/shortest-paths/spfa.md",sourceDirName:"graph-algorithms/shortest-paths",slug:"/graph-algorithms/shortest-paths/spfa",permalink:"/lcc/docs/graph-algorithms/shortest-paths/spfa",editUrl:"https://github.com/trayimurti/lcc/tree/main/docs/graph-algorithms/shortest-paths/spfa.md",tags:[{label:"graph",permalink:"/lcc/docs/tags/graph"},{label:"shortest-paths",permalink:"/lcc/docs/tags/shortest-paths"},{label:"bellman-ford",permalink:"/lcc/docs/tags/bellman-ford"},{label:"spfa",permalink:"/lcc/docs/tags/spfa"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["graph","shortest-paths","bellman-ford","spfa"]},sidebar:"tutorialSidebar",previous:{title:"Bellman-Ford Algorithm",permalink:"/lcc/docs/graph-algorithms/shortest-paths/bellman-ford"},next:{title:"Dijkstra's Algorithm",permalink:"/lcc/docs/graph-algorithms/shortest-paths/dijkstra"}},l=[{value:"Algorithm",id:"algorithm",children:[],level:2},{value:"Implementation",id:"implementation",children:[],level:2}],c={toc:l};function h(a){var e=a.components,t=(0,r.Z)(a,m);return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"shortest-path-faster-algorithm-spfa"},"Shortest Path Faster Algorithm (SPFA)"),(0,s.kt)("h2",{id:"algorithm"},"Algorithm"),(0,s.kt)("p",null,"SPFA is a improvement of the Bellman-Ford algorithm which takes advantage of the fact that not all attempts at relaxation will work. The main idea is to create a queue containing only the vertices that were relaxed but that still could further relax their neighbors. And whenever you can relax some neighbor, you should put him in the queue. This algorithm can also be used to detect negative cycles as the Bellman-Ford."),(0,s.kt)("p",null,"The worst case of this algorithm is equal to the ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(n \\cdot m)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))," of the Bellman-Ford, but in practice it works much faster and it works even in ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(m)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))))," on average. However be careful, because this algorithm is deterministic and it is easy to create counterexamples that make the algorithm run in ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,s.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"script"},"m"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(n \\cdot m)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),"."),(0,s.kt)("h2",{id:"implementation"},"Implementation"),(0,s.kt)("p",null,"There are some care to be taken in the implementation, such as the fact that the algorithm continues forever if there is a negative cycle. To avoid this, it is possible to create a counter that stores how many times a vertex has been relaxed and stop the algorithm as soon as some vertex got relaxed for the -th time. Note, also there is no reason to put a vertex in the queue if it is already in."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp"},"const int INF = 1000000000;\nvector<vector<pair<int, int>>> adj;\n\nbool spfa(int s, vector<int>& d) {\n    int n = adj.size();\n    d.assign(n, INF);\n    vector<int> cnt(n, 0);\n    vector<bool> inqueue(n, false);\n    queue<int> q;\n\n    d[s] = 0;\n    q.push(s);\n    inqueue[s] = true;\n    while (!q.empty()) {\n        int v = q.front();\n        q.pop();\n        inqueue[v] = false;\n\n        for (auto edge : adj[v]) {\n            int to = edge.first;\n            int len = edge.second;\n\n            if (d[v] + len < d[to]) {\n                d[to] = d[v] + len;\n                if (!inqueue[to]) {\n                    q.push(to);\n                    inqueue[to] = true;\n                    cnt[to]++;\n                    if (cnt[to] > n)\n                        return false;  // negative cycle\n                }\n            }\n        }\n    }\n    return true;\n}\n")))}h.isMDXComponent=!0}}]);