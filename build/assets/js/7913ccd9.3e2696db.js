"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={title:"CSS Grid"},l=void 0,o={unversionedId:"gatsby/concepts/CSSGrid",id:"gatsby/concepts/CSSGrid",title:"CSS Grid",description:"What is a Grid?",source:"@site/docs/gatsby/concepts/05-CSSGrid.md",sourceDirName:"gatsby/concepts",slug:"/gatsby/concepts/CSSGrid",permalink:"/docs/gatsby/concepts/CSSGrid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gatsby/concepts/05-CSSGrid.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"CSS Grid"},sidebar:"someSidebar",previous:{title:"Data",permalink:"/docs/gatsby/concepts/Data"},next:{title:"Images",permalink:"/docs/gatsby/concepts/Images"}},s={},p=[{value:"What is a Grid?",id:"what-is-a-grid",level:2},{value:"Terminology",id:"terminology",level:2},{value:"CSS Properties",id:"css-properties",level:3},{value:"Browser Support",id:"browser-support",level:3},{value:"Techniques for Older Browsers",id:"techniques-for-older-browsers",level:3},{value:"Reference",id:"reference",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-a-grid"},"What is a Grid?"),(0,i.kt)("p",null,"CSS Grid Layout (aka \u201cGrid\u201d), is a two-dimensional grid-based layout system that aims to do nothing less than completely change the way we design grid-based user interfaces. CSS has always been used to lay out our web pages, but it\u2019s never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What about Flexbox?"),(0,i.kt)("p",{parentName:"blockquote"},"Flexbox helped out, but it\u2019s intended for simpler one-dimensional layouts, not complex two-dimensional ones (Flexbox and Grid actually work very well together). Grid is the very first CSS module created specifically to solve the layout problems we\u2019ve all been hacking our way around for as long as we\u2019ve been making websites.")),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid container")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid items")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid lines")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid cells")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid columns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid rows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid tracks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Grid areas"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/complete-guide-grid/#aa-important-terminology"},"Visualize these by looking at this cheatsheet")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://css-tricks.com/snippets/css/complete-guide-grid/#column-gaprow-gapgrid-column-gapgrid-row-gap"},"Gaps"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Margins: outside the grid"))),(0,i.kt)("h3",{id:"css-properties"},"CSS Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties"},"28 properties with similar names")),(0,i.kt)("li",{parentName:"ul"},"Creates confusion"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grid.malven.co/"},"Visualizing the grid properties"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tip: Focus on short list of critical properties below")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating the Grid",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"grid-template-columns"),(0,i.kt)("li",{parentName:"ul"},"grid-template-rows"))),(0,i.kt)("li",{parentName:"ul"},"Placing items in the grid",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"grid-column-","[start|end]"),(0,i.kt)("li",{parentName:"ul"},"grid-row-","[start|end]")))),(0,i.kt)("h3",{id:"browser-support"},"Browser Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modern Browsers Supported"),(0,i.kt)("li",{parentName:"ul"},"IE 10-11 Partial (Early version, requires -ms- prefix)"),(0,i.kt)("li",{parentName:"ul"},"Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://caniuse.com/css-grid"},"https://caniuse.com/css-grid"))),(0,i.kt)("h3",{id:"techniques-for-older-browsers"},"Techniques for Older Browsers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Feature Detection"),(0,i.kt)("li",{parentName:"ul"},"Prefixed rules for Internet Explorer"),(0,i.kt)("li",{parentName:"ul"},"Progressive Enhancement")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grid.malven.co/"},"Visualize all the grid properties")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=uuOXPWCh-6o"},"Video: CSS Grid in 100 Seconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/complete-guide-grid/"},"CSS Tricks: Complete Guide to Grid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/joyshaheb/css-grid-cheat-sheet-illustrated-in-2021-1a3"},"CSS Grid Illustrations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://devhints.io/css-grid"},"CSS Grid CheatSheet"))))}u.isMDXComponent=!0}}]);