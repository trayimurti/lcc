"use strict";(self.webpackChunklcc=self.webpackChunklcc||[]).push([[800],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),c=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=c(r),g=a,b=m["".concat(u,".").concat(g)]||m[g]||s[g]||i;return r?n.createElement(b,l(l({ref:e},p),{},{components:r})):n.createElement(b,l({ref:e},p))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7732:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return p},toc:function(){return s},default:function(){return g}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],o={slug:"ioitc-day-1-part-3",title:"IOITC Day-1 Part-3",authors:"trayimurti",tags:["ioitc","ioi","sliding-window-algorithm","day-1","part-3","garden"]},u=void 0,c={permalink:"/lcc/blog/ioitc-day-1-part-3",editUrl:"https://github.com/trayimurti/lcc/blog/2022-01-25-ioitc-day-1-part-3/index.md",source:"@site/blog/2022-01-25-ioitc-day-1-part-3/index.md",title:"IOITC Day-1 Part-3",description:"Let's increase problem level further.",date:"2022-01-25T00:00:00.000Z",formattedDate:"January 25, 2022",tags:[{label:"ioitc",permalink:"/lcc/blog/tags/ioitc"},{label:"ioi",permalink:"/lcc/blog/tags/ioi"},{label:"sliding-window-algorithm",permalink:"/lcc/blog/tags/sliding-window-algorithm"},{label:"day-1",permalink:"/lcc/blog/tags/day-1"},{label:"part-3",permalink:"/lcc/blog/tags/part-3"},{label:"garden",permalink:"/lcc/blog/tags/garden"}],readingTime:4.74,truncated:!0,authors:[{name:"Trayi Murti",title:"IOI Training Camp Participant",url:"https://github.com/trayimurti",imageURL:"https://github.com/trayimurti.png",key:"trayimurti"}],frontMatter:{slug:"ioitc-day-1-part-3",title:"IOITC Day-1 Part-3",authors:"trayimurti",tags:["ioitc","ioi","sliding-window-algorithm","day-1","part-3","garden"]},nextItem:{title:"IOITC Day-1 Part-2",permalink:"/lcc/blog/ioitc-day-1-part-2"}},p={authorsImageUrls:[void 0]},s=[{value:"Problem",id:"problem",children:[],level:3}],m={toc:s};function g(t){var e=t.components,r=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's increase problem level further."),(0,i.kt)("h3",{id:"problem"},"Problem"),(0,i.kt)("p",null,"Given a grid of integers ",(0,i.kt)("strong",{parentName:"p"},"L = [","[A",(0,i.kt)("sub",null,"1,1"),", A",(0,i.kt)("sub",null,"1,2"),", A",(0,i.kt)("sub",null,"1,3"),", ..., A",(0,i.kt)("sub",null,"1,M"),"]",", ","[A",(0,i.kt)("sub",null,"2,1"),", A",(0,i.kt)("sub",null,"2,1"),", A",(0,i.kt)("sub",null,"2,3"),", ..., A",(0,i.kt)("sub",null,"2,M"),"]",", ","[A",(0,i.kt)("sub",null,"3,1"),", A",(0,i.kt)("sub",null,"3,2"),", A",(0,i.kt)("sub",null,"3,3"),", ..., A",(0,i.kt)("sub",null,"3,M"),"]",", ","[..., ..., ..., ..., ...]",", ","[A",(0,i.kt)("sub",null,"N,1"),", A",(0,i.kt)("sub",null,"N,2"),", A",(0,i.kt)("sub",null,"N,3"),", ..., A",(0,i.kt)("sub",null,"N,M"),"]","]"),". Where ",(0,i.kt)("strong",{parentName:"p"},"A",(0,i.kt)("sub",null,"i,j")," \u2265 0"),", ",(0,i.kt)("strong",{parentName:"p"},"0 \u2264 i \u2264 N"),", ",(0,i.kt)("strong",{parentName:"p"},"0 \u2264 j \u2264 M"),". You have to find the least perimeter of rectangle which adds up to a given integer ",(0,i.kt)("strong",{parentName:"p"},"K"),"."))}g.isMDXComponent=!0}}]);