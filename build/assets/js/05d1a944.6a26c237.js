"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[6433],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),y=r,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4426:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={title:"Data"},i=void 0,l={unversionedId:"gatsby/concepts/Data",id:"gatsby/concepts/Data",title:"Data",description:"What is Data?",source:"@site/docs/gatsby/concepts/04-Data.md",sourceDirName:"gatsby/concepts",slug:"/gatsby/concepts/Data",permalink:"/docs/gatsby/concepts/Data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gatsby/concepts/04-Data.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Data"},sidebar:"someSidebar",previous:{title:"Styling",permalink:"/docs/gatsby/concepts/Styling"},next:{title:"CSS Grid",permalink:"/docs/gatsby/concepts/CSSGrid"}},s={},u=[{value:"What is Data?",id:"what-is-data",level:2},{value:"Using Many Sources of Data",id:"using-many-sources-of-data",level:2},{value:"Kinds of Data",id:"kinds-of-data",level:2},{value:"Unstructured Data",id:"unstructured-data",level:2},{value:"Create Page API",id:"create-page-api",level:2},{value:"Query Data with GraphQL",id:"query-data-with-graphql",level:2},{value:"Page Queries",id:"page-queries",level:2},{value:"Static Queries",id:"static-queries",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-data"},"What is Data?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'A very computer science-y answer would be: data is things like "strings", integers (42), objects ({ pizza: true }), etc.'),(0,r.kt)("li",{parentName:"ul"},"For the purpose of working in Gatsby, however, a more useful answer is \u201ceverything that lives outside a React component\u201d.")),(0,r.kt)("h2",{id:"using-many-sources-of-data"},"Using Many Sources of Data"),(0,r.kt)("p",null,"Data can also live in file types like Markdown, CSV, etc. as well as databases and APIs of all sorts."),(0,r.kt)("p",null,"Gatsby\u2019s data layer lets you pull data from these (and any other source) directly into your components \u2014 in the shape and form you want."),(0,r.kt)("h2",{id:"kinds-of-data"},"Kinds of Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unstructured Data"),(0,r.kt)("li",{parentName:"ul"},"GraphQL")),(0,r.kt)("h2",{id:"unstructured-data"},"Unstructured Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Other APIs"),(0,r.kt)("li",{parentName:"ul"},"building a small site, one efficient way to build it is to pull in unstructured data using createPages API"),(0,r.kt)("li",{parentName:"ul"},"if the site becomes more complex later on, you move on to building more complex sites, or you\u2019d like to transform your data then use a Gatsby plugin to query data using GraphQL")),(0,r.kt)("h2",{id:"create-page-api"},"Create Page API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows you to create pages dynamically at build time")),(0,r.kt)("h2",{id:"query-data-with-graphql"},"Query Data with GraphQL"),(0,r.kt)("p",null,"There are many options for loading data into React components. One of the most popular and powerful of these is a technology called GraphQL."),(0,r.kt)("p",null,"GraphQL was invented at Facebook to help product engineers pull needed data into React components."),(0,r.kt)("p",null,"GraphQL is a query language (the QL part of its name). If you\u2019re familiar with SQL, it works in a very similar way. Using a special syntax, you describe the data you want in your component and then that data is given to you."),(0,r.kt)("p",null,"Gatsby uses GraphQL to enable page and StaticQuery components to declare what data they and their sub-components need. Then, Gatsby makes that data available in the browser when needed by your components."),(0,r.kt)("h2",{id:"page-queries"},"Page Queries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"graphql")," tag enables page components to retrieve data"),(0,r.kt)("li",{parentName:"ul"},"Query result automatically goes into the component's ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," prop"),(0,r.kt)("li",{parentName:"ul"},"Queries in Page Components are called Page Queries")),(0,r.kt)("h2",{id:"static-queries"},"Static Queries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Queries in Subcomponents are called Static Queries"),(0,r.kt)("li",{parentName:"ul"},"Allow non-page components to query data"),(0,r.kt)("li",{parentName:"ul"},"Introduced in Gatsby v2"),(0,r.kt)("li",{parentName:"ul"},"Achieved using ",(0,r.kt)("inlineCode",{parentName:"li"},"useStaticQuery")," hook")))}p.isMDXComponent=!0}}]);