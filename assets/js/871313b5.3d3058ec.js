"use strict";(self.webpackChunklcc=self.webpackChunklcc||[]).push([[823],{3905:function(e,a,t){t.d(a,{Zo:function(){return i},kt:function(){return d}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),h=o(t),d=s,N=h["".concat(p,".").concat(d)]||h[d]||l[d]||r;return t?n.createElement(N,c(c({ref:a},i),{},{components:t})):n.createElement(N,c({ref:a},i))}));function d(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,c=new Array(r);c[0]=h;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m.mdxType="string"==typeof e?e:s,c[1]=m;for(var o=2;o<r;o++)c[o]=t[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1052:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return i},default:function(){return h}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),c=["components"],m={sidebar_position:3,tags:["successor-graphs","cycle-detection"]},p="Cycle Detection",o={unversionedId:"graph-algorithms/successor-graphs/cycle-detection",id:"graph-algorithms/successor-graphs/cycle-detection",title:"Cycle Detection",description:"Consider a successor graph that only contains a path that ends in a cycle. We may ask the following questions: if we begin our walk at the starting node, what is the first node in the cycle and how many nodes does the cycle contain? For example, in Fig. 34, we begin our walk at node 1, the first node that belongs to the cycle is node 4, and the cycle consists of three nodes (4, 5, and 6).",source:"@site/docs/graph-algorithms/successor-graphs/cycle-detection.md",sourceDirName:"graph-algorithms/successor-graphs",slug:"/graph-algorithms/successor-graphs/cycle-detection",permalink:"/lcc/docs/graph-algorithms/successor-graphs/cycle-detection",editUrl:"https://github.com/trayimurti/lcc/tree/main/docs/graph-algorithms/successor-graphs/cycle-detection.md",tags:[{label:"successor-graphs",permalink:"/lcc/docs/tags/successor-graphs"},{label:"cycle-detection",permalink:"/lcc/docs/tags/cycle-detection"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["successor-graphs","cycle-detection"]},sidebar:"tutorialSidebar",previous:{title:"Finding Successor",permalink:"/lcc/docs/graph-algorithms/successor-graphs/finding-successors"},next:{title:"Introduction",permalink:"/lcc/docs/graph-algorithms/mst/intro"}},i=[],l={toc:i};function h(e){var a=e.components,m=(0,s.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},l,m,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cycle-detection"},"Cycle Detection"),(0,r.kt)("p",null,"Consider a successor graph that only contains a path that ends in a cycle. We may ask the following questions: if we begin our walk at the starting node, what is the first node in the cycle and how many nodes does the cycle contain? For example, in Fig. 34, we begin our walk at node 1, the first node that belongs to the cycle is node 4, and the cycle consists of three nodes (4, 5, and 6)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("img",{alt:"A cycle in a successor graph",src:t(8934).Z,width:"461",height:"142"})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"td"},"Fig. 34:")," A cycle in a successor graph")))),(0,r.kt)("p",null,"A simple way to detect the cycle is to walk in the graph and keep track of all nodes that have been visited. Once a node is visited for the second time, we can conclude that the node is the first node in the cycle. This method works in ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))," time and also uses ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))," memory. However, there are better algorithms for cycle detection. The time complexity of such algorithms is still ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"script"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),", but they only use ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"script"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow",mathvariant:"script"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\cal{O}(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathcal",style:{marginRight:"0.02778em"}},"O")),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))))," memory, which may be an important improvement if ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," is large."),(0,r.kt)("p",null,"One such algorithm is Floyd\u2019s algorithm, which walks in the graph using two pointers ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),". Both pointers begin at the starting node ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),". Then, on each turn, the pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," walks one step forward and the pointer ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," walks two steps forward. The process continues until the pointers meet each other:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"a = succ(x);\nb = succ(succ(x));\nwhile (a != b) {\n    a = succ(a);\n    b = succ(succ(b));\n}\n")),(0,r.kt)("p",null,"At this point, the pointer a has walked k steps and the pointer b has walked 2k steps, so the length of the cycle divides k. Thus, the first node that belongs to the cycle can be found by moving the pointer a to node x and advancing the pointers step by step until they meet again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"a = x;\nwhile (a != b) {\n    a = succ(a);\n    b = succ(b);\n}\nfirst = a;\n")),(0,r.kt)("p",null,"After this, the length of the cycle can be calculated as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"b = succ(a);\nlength = 1;\nwhile (a != b) {\n    b = succ(b);\n    length++;\n}\n")))}h.isMDXComponent=!0},8934:function(e,a,t){a.Z=t.p+"assets/images/34-dcdffc9328af1140be59889db8e5a784.png"}}]);