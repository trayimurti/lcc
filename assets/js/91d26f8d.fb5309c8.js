"use strict";(self.webpackChunklcc=self.webpackChunklcc||[]).push([[175],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),l=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(o.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,g=c["".concat(o,".").concat(d)]||c[d]||h[d]||s;return t?n.createElement(g,p(p({ref:a},i),{},{components:t})):n.createElement(g,p({ref:a},i))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,p=new Array(s);p[0]=c;var m={};for(var o in a)hasOwnProperty.call(a,o)&&(m[o]=a[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,p[1]=m;for(var l=2;l<s;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1326:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return i},default:function(){return c}});var n=t(7462),r=t(3366),s=(t(7294),t(3905)),p=["components"],m={sidebar_position:2,tags:["graph","terminology","cycle-in-a-graph","connected-graph","tree","degree-of-a-node","regular-graph","complete-graph","indegree","outdegree","bipartite-graph"]},o="Graph Terminology",l={unversionedId:"graph-algorithms/intro/graph-terminology",id:"graph-algorithms/intro/graph-terminology",title:"Graph Terminology",description:"In this course we will use variable n as number of nodes and variable m as number of edges.",source:"@site/docs/graph-algorithms/intro/graph-terminology.md",sourceDirName:"graph-algorithms/intro",slug:"/graph-algorithms/intro/graph-terminology",permalink:"/docs/graph-algorithms/intro/graph-terminology",editUrl:"https://github.com/trayimurti/lcc/docs/graph-algorithms/intro/graph-terminology.md",tags:[{label:"graph",permalink:"/docs/tags/graph"},{label:"terminology",permalink:"/docs/tags/terminology"},{label:"cycle-in-a-graph",permalink:"/docs/tags/cycle-in-a-graph"},{label:"connected-graph",permalink:"/docs/tags/connected-graph"},{label:"tree",permalink:"/docs/tags/tree"},{label:"degree-of-a-node",permalink:"/docs/tags/degree-of-a-node"},{label:"regular-graph",permalink:"/docs/tags/regular-graph"},{label:"complete-graph",permalink:"/docs/tags/complete-graph"},{label:"indegree",permalink:"/docs/tags/indegree"},{label:"outdegree",permalink:"/docs/tags/outdegree"},{label:"bipartite-graph",permalink:"/docs/tags/bipartite-graph"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["graph","terminology","cycle-in-a-graph","connected-graph","tree","degree-of-a-node","regular-graph","complete-graph","indegree","outdegree","bipartite-graph"]},sidebar:"tutorialSidebar",previous:{title:"Introduction to Graph",permalink:"/docs/graph-algorithms/intro/what-is-a-graph"}},i=[{value:"Length of a path",id:"length-of-a-path",children:[],level:2},{value:"Cycle in a graph",id:"cycle-in-a-graph",children:[],level:2},{value:"Connected graph",id:"connected-graph",children:[],level:2},{value:"Tree",id:"tree",children:[],level:2},{value:"Directed graph",id:"directed-graph",children:[],level:2},{value:"Weighted graph",id:"weighted-graph",children:[],level:2},{value:"Neighbors or adjacent nodes",id:"neighbors-or-adjacent-nodes",children:[],level:2},{value:"Degree of a node",id:"degree-of-a-node",children:[],level:2},{value:"Regular graph",id:"regular-graph",children:[],level:2},{value:"Complete graph",id:"complete-graph",children:[],level:2},{value:"Indegree and Outdegree",id:"indegree-and-outdegree",children:[],level:2},{value:"Bipartite graph",id:"bipartite-graph",children:[],level:2}],h={toc:i};function c(e){var a=e.components,m=(0,r.Z)(e,p);return(0,s.kt)("wrapper",(0,n.Z)({},h,m,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"graph-terminology"},"Graph Terminology"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In this course we will use variable ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," as number of nodes and variable ",(0,s.kt)("inlineCode",{parentName:"p"},"m")," as number of edges.\nThe nodes will be numbered using integers 1, 2, ..., n."))),(0,s.kt)("p",null,"Fig. 1 shows a graph example with 5 nodes and 7 edges."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"Graph with 5 nodes and 7 edges",src:t(1335).Z,width:"310",height:"159"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 1:")," Graph with 5 nodes and 7 edges")))),(0,s.kt)("h2",{id:"length-of-a-path"},"Length of a path"),(0,s.kt)("p",null,"The length of a path is the number of edges in it. For example, Fig. 2 shows a path\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"5")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 \\to 3 \\to 4 \\to 5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5")))))," of length 3 from node 1 to node 5."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"A path from node 1 to node 5",src:t(9319).Z,width:"310",height:"155"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 2:")," A path from node 1 to node 5")))),(0,s.kt)("h2",{id:"cycle-in-a-graph"},"Cycle in a graph"),(0,s.kt)("p",null,"A cycle is a path where the first and last node is the same. For example, Fig. 3 shows a cycle ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 \\to 3 \\to 4 \\to 1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),"."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"A cycle of three nodes",src:t(158).Z,width:"313",height:"161"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 3:")," A cycle of three nodes")))),(0,s.kt)("h2",{id:"connected-graph"},"Connected graph"),(0,s.kt)("p",null,"A graph is connected if there is a path between any two nodes. In Fig. 4, the left graph is connected, but the right graph is not connected, because it is not possible to get from node 4 to any other node."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"The left graph is connected, the right graph is not",src:t(158).Z,width:"313",height:"161"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 4:")," The left graph is connected, the right graph is not")))),(0,s.kt)("p",null,"The connected parts of a graph are called its components. For example, the graph in Fig. 5 has three components: {1, 2, 3}, {4, 5, 6, 7}, and {8}."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"A graph with three components",src:t(158).Z,width:"313",height:"161"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 5:")," A graph with three components")))),(0,s.kt)("h2",{id:"tree"},"Tree"),(0,s.kt)("p",null,"A tree is a connected graph that does not contain cycles. Figure 6 shows an example of a graph that is a tree."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"A Tree",src:t(1887).Z,width:"315",height:"157"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 6:")," A Tree")))),(0,s.kt)("h2",{id:"directed-graph"},"Directed graph"),(0,s.kt)("p",null,"In a directed graph, the edges can be traversed in one direction only. Figure 7 shows an example of a directed graph. This graph contains a path ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"5")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3 \\to 1 \\to 2 \\to 5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5")))))," from node 3 to node 5, but there is no path from node 5 to node 3."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"A directed graph",src:t(9148).Z,width:"312",height:"162"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 7:")," A directed graph")))),(0,s.kt)("h2",{id:"weighted-graph"},"Weighted graph"),(0,s.kt)("p",null,"In a weighted graph, each edge is assigned a weight. The weights are often interpreted as edge lengths, and the length of a path is the sum of its edge weights. For example, the graph in Fig. 8 is weighted, and the length of the path ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mn",{parentName:"mrow"},"5")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 \\to 3 \\to 4 \\to 5")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"5")))))," is ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"7"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"3"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"11")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1 + 7 + 3 = 11")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"3"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"11"))))),". This is the shortest path from node 1 to node 5."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"A weighted graph",src:t(9196).Z,width:"315",height:"175"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 8:")," A weighted graph")))),(0,s.kt)("h2",{id:"neighbors-or-adjacent-nodes"},"Neighbors or adjacent nodes"),(0,s.kt)("p",null,"Two nodes are neighbors or adjacent if there is an edge between them."),(0,s.kt)("h2",{id:"degree-of-a-node"},"Degree of a node"),(0,s.kt)("p",null,"The degree of a node is the number of its neighbors. Figure 9 shows the degree of each node of a graph. For example, the degree of node 2 is 3, because its neighbors are 1, 4, and 5."),(0,s.kt)("p",null,"The sum of degrees in a graph is always 2m, where m is the number of edges,\nbecause each edge increases the degree of exactly two nodes by one. For this reason,\nthe sum of degrees is always even."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"Degrees of nodes",src:t(4625).Z,width:"327",height:"217"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 9:")," Degrees of nodes")))),(0,s.kt)("h2",{id:"regular-graph"},"Regular graph"),(0,s.kt)("p",null,"A graph is regular if the degree of every node is a constant d."),(0,s.kt)("h2",{id:"complete-graph"},"Complete graph"),(0,s.kt)("p",null,"A graph is complete if the degree of every node is n \u2212 1, i.e., the graph contains all possible edges between the nodes."),(0,s.kt)("h2",{id:"indegree-and-outdegree"},"Indegree and Outdegree"),(0,s.kt)("p",null,"In a directed graph, the indegree of a node is the number of edges that end at the node, and the outdegree of a node is the number of edges that start at the node. Figure 10 shows the indegree and outdegree of each node of a graph. For example, node 2 has indegree 2 and outdegree 1."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"Indegrees and outdegrees",src:t(1704).Z,width:"325",height:"217"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 10:")," Indegrees and outdegrees")))),(0,s.kt)("h2",{id:"bipartite-graph"},"Bipartite graph"),(0,s.kt)("p",null,"A graph is bipartite if it is possible to color its nodes using two colors in such a way that no adjacent nodes have the same color. It turns out that a graph is bipartite exactly when it does not have a cycle with an odd number of edges. For example, Fig. 11 shows a bipartite graph and its coloring."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},(0,s.kt)("img",{alt:"A bipartite graph and its coloring",src:t(6926).Z,width:"356",height:"336"})))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("strong",{parentName:"td"},"Fig. 11:")," A bipartite graph and its coloring")))))}c.isMDXComponent=!0},1335:function(e,a,t){a.Z=t.p+"assets/images/1-18916764cef9c802eb8de14483131a0c.png"},1704:function(e,a,t){a.Z=t.p+"assets/images/10-6684e5814bf3e5d06a3b83254741be9e.png"},6926:function(e,a,t){a.Z=t.p+"assets/images/11-ea06c0b8a560d8860f7dd36fec913faa.png"},9319:function(e,a,t){a.Z=t.p+"assets/images/2-5dc24321342e037a0b76aecefe325187.png"},158:function(e,a,t){a.Z=t.p+"assets/images/3-df319f0a51b67fa6bc81f842b8cb4a41.png"},1887:function(e,a){a.Z="data:image/png;base64,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"},9148:function(e,a,t){a.Z=t.p+"assets/images/7-c025351ce616e17caa5e4fbbd8f2c62f.png"},9196:function(e,a,t){a.Z=t.p+"assets/images/8-2b1a39e66ecfb6804f473d797378cf70.png"},4625:function(e,a,t){a.Z=t.p+"assets/images/9-7e3ddf1ff16fc610cbfb20fb73463c0c.png"}}]);