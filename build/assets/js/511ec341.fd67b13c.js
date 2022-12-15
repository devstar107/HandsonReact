"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[8211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),k=o,d=p["".concat(s,".").concat(k)]||p[k]||m[k]||l;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const l={title:"Hooks",sidebar_label:"Hooks",slug:"/hooks"},r=void 0,i={unversionedId:"Hooks",id:"Hooks",title:"Hooks",description:"Defined",source:"@site/docs/08-Hooks.md",sourceDirName:".",slug:"/hooks",permalink:"/docs/hooks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/08-Hooks.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Hooks",sidebar_label:"Hooks",slug:"/hooks"},sidebar:"someSidebar",previous:{title:"Lab 10: Creating a Form to Edit Your Data",permalink:"/docs/labs/ts/CreatingForm"},next:{title:"State",permalink:"/docs/state"}},s={},u=[{value:"Defined",id:"defined",level:2},{value:"Background",id:"background",level:2},{value:"Why Hooks?",id:"why-hooks",level:2},{value:"No Breaking Changes",id:"no-breaking-changes",level:2},{value:"Best Practice",id:"best-practice",level:2},{value:"Should I rewrite my class components?",id:"should-i-rewrite-my-class-components",level:3},{value:"Hooks API",id:"hooks-api",level:2},{value:"Rules of Hooks",id:"rules-of-hooks",level:2},{value:"Custom Hooks",id:"custom-hooks",level:2},{value:"Labs",id:"labs",level:2},{value:"Reference",id:"reference",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"defined"},"Defined"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Hooks are a new addition in React 16.8. They let you use ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," and other React features including ",(0,o.kt)("inlineCode",{parentName:"p"},"Lifecycle Methods")," without writing a class.")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React has always had two types of components: class and function."),(0,o.kt)("li",{parentName:"ul"},"Before hooks, class and function components were not interchangeable."),(0,o.kt)("li",{parentName:"ul"},"Before hooks, function components had two feature limitations:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"couldn't have state"),(0,o.kt)("li",{parentName:"ul"},"couldn't have lifecycle events"))),(0,o.kt)("li",{parentName:"ul"},"After hooks, function components became more capable than class components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"can have state (useState hook)"),(0,o.kt)("li",{parentName:"ul"},"can handle lifecycle events (useEffect hook)"),(0,o.kt)("li",{parentName:"ul"},"can reuse stateful logic with ",(0,o.kt)("inlineCode",{parentName:"li"},"Custom Hooks"))))),(0,o.kt)("h2",{id:"why-hooks"},"Why Hooks?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Complex components become hard to understand",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"lifecycle events like ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidMount")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidUpdate")," contain code to address mixed concerns",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"data fetching"),(0,o.kt)("li",{parentName:"ul"},"setting up event listeners"),(0,o.kt)("li",{parentName:"ul"},"etc..."),(0,o.kt)("li",{parentName:"ul"},"leads to bugs and inconsistencies"))))),(0,o.kt)("li",{parentName:"ul"},"Classes confuse both people and machines",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"class can be a large barrier to learning React",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"understanding ",(0,o.kt)("inlineCode",{parentName:"li"},"this")," in JavaScript"),(0,o.kt)("li",{parentName:"ul"},"code is verbose without unstable syntax proposals"),(0,o.kt)("li",{parentName:"ul"},"when to use class vs function components"))),(0,o.kt)("li",{parentName:"ul"},"classes don't work well with today's tools",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"don't minify well"),(0,o.kt)("li",{parentName:"ul"},"don't tree shake well"),(0,o.kt)("li",{parentName:"ul"},"make hot reloading flaky and unreliable")))))),(0,o.kt)("h2",{id:"no-breaking-changes"},"No Breaking Changes"),(0,o.kt)("p",null,"Before we continue, note that Hooks are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Completely opt-in.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can try Hooks in a few components without rewriting any existing code. But you don\u2019t have to learn or use Hooks right now if you don\u2019t want to."))),(0,o.kt)("li",{parentName:"ul"},"100% backwards-compatible.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hooks don\u2019t contain any breaking changes."))),(0,o.kt)("li",{parentName:"ul"},"Available now.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hooks are now available with the release of v16.8.0."))),(0,o.kt)("li",{parentName:"ul"},"There are no plans to remove classes from React."),(0,o.kt)("li",{parentName:"ul"},"Hooks don\u2019t replace your knowledge of React concepts.")),(0,o.kt)("h2",{id:"best-practice"},"Best Practice"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Function components with hooks")," are now considered a best practice in the React community."),(0,o.kt)("p",null,"If you are starting a new project I would recommend using all function components with hooks and avoid writing class components."),(0,o.kt)("h3",{id:"should-i-rewrite-my-class-components"},"Should I rewrite my class components?"),(0,o.kt)("p",null,"After learning that function components with hooks have become a best practice, the question becomes: should you should rewrite your existing class components (if you have them) to be function components?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As I mentioned previously, there are no plans to remove class components from React."),(0,o.kt)("li",{parentName:"ul"},"If your class components are working and you only need to make small bug fixes and find them easy to make I don't think it is worth the effort."),(0,o.kt)("li",{parentName:"ul"},"If you are finding it difficult for your team to grasp React and JavaScript (for example: the nuances of the this keyword) then it might be worth it to rewrite the components as functions.")),(0,o.kt)("h2",{id:"hooks-api"},"Hooks API"),(0,o.kt)("p",null,"Hooks provide a more direct API to the React concepts you already know: props, ",(0,o.kt)("strong",{parentName:"p"},"state"),", context, refs, and ",(0,o.kt)("strong",{parentName:"p"},"lifecycle"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Class Components"),(0,o.kt)("th",{parentName:"tr",align:null},"Function Components"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"this.setState"),(0,o.kt)("td",{parentName:"tr",align:null},"useState")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lifecycle Methods"),(0,o.kt)("td",{parentName:"tr",align:null},"useEffect")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"createRef, ref"),(0,o.kt)("td",{parentName:"tr",align:null},"useRef, ref")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Context.Provider, Context.Consumer"),(0,o.kt)("td",{parentName:"tr",align:null},"Context.Provider, useContext")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Function Components"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"useState"),(0,o.kt)("li",{parentName:"ul"},"useEffect"),(0,o.kt)("li",{parentName:"ul"},"useRef"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"this.setState")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"Lifecycle Methods (componentDidMount)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"createRef")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Class Components"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"useState")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"useEffect")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("del",{parentName:"li"},"useRef")),(0,o.kt)("li",{parentName:"ul"},"this.setState"),(0,o.kt)("li",{parentName:"ul"},"Lifecycle Methods (componentDidMount)"),(0,o.kt)("li",{parentName:"ul"},"createRef")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We will learn the details of each of these hooks in the subsequent sections of the course. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," section will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," hook and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Side Effects & Lifecycle")," section will explain the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," hook.")),(0,o.kt)("h2",{id:"rules-of-hooks"},"Rules of Hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Only")," call hooks at the ",(0,o.kt)("strong",{parentName:"li"},"top level")," (of your function component)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"don't call them inside loops (for), conditions (if), or nested functions (only inside your main function component body)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Only")," call hooks from ",(0,o.kt)("strong",{parentName:"li"},"React Functions"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"call hooks from React function components"),(0,o.kt)("li",{parentName:"ul"},"call hooks from other custom hooks")))),(0,o.kt)("h2",{id:"custom-hooks"},"Custom Hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Custom Hooks allow you to easily reuse stateful logic between components."),(0,o.kt)("li",{parentName:"ul"},"Custom Hooks are covered in an advanced section of the course after we learn the built-in hooks.")),(0,o.kt)("h2",{id:"labs"},"Labs"),(0,o.kt)("p",null,"The labs in this course use all ",(0,o.kt)("strong",{parentName:"p"},"function components with hooks")," which are now considered a best practice in the React community."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-overview.html"},"Hooks Documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://academind.com/learn/react/react-hooks-introduction/"},"Hooks Introduction")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html"},"Hooks Reference"))))}p.isMDXComponent=!0}}]);