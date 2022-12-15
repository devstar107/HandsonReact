"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[4282],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=n,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return a?r.createElement(k,i(i({ref:t},c),{},{components:a})):r.createElement(k,i({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2801:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));a(4996);const l={title:"Comparison",sidebar_label:"Comparison",slug:"/comparison"},i=void 0,o={unversionedId:"01-02-Comparison",id:"01-02-Comparison",title:"Comparison",description:"React, Angular, Vue Compared",source:"@site/docs/01-02-Comparison.md",sourceDirName:".",slug:"/comparison",permalink:"/docs/comparison",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01-02-Comparison.md",tags:[],version:"current",frontMatter:{title:"Comparison",sidebar_label:"Comparison",slug:"/comparison"},sidebar:"someSidebar",previous:{title:"Why React?",permalink:"/docs/why-react"},next:{title:"Architecture",permalink:"/docs/architecture"}},u={},p=[{value:"React, Angular, Vue Compared",id:"react-angular-vue-compared",level:2},{value:"React",id:"react",level:3},{value:"Angular",id:"angular",level:3},{value:"Vue",id:"vue",level:3},{value:"React, Angular, Vue: Key Insights",id:"react-angular-vue-key-insights",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"react-angular-vue-compared"},"React, Angular, Vue Compared"),(0,n.kt)("p",null,"JavaScript libraries and frameworks have more similarities than differences. The reality is that they borrow ideas from each other to improve the JavaScript ecosystem."),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Facebook"),(0,n.kt)("li",{parentName:"ul"},"Components"),(0,n.kt)("li",{parentName:"ul"},"Library"),(0,n.kt)("li",{parentName:"ul"},"Just the View in MVC"),(0,n.kt)("li",{parentName:"ul"},"Need to include other libraries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"React Router (Routing)"),(0,n.kt)("li",{parentName:"ul"},"HTTP: Axios or fetch API"))),(0,n.kt)("li",{parentName:"ul"},"ES6 (Babel compiler) or TypeScript (tsc compiler)"),(0,n.kt)("li",{parentName:"ul"},"Create React App"),(0,n.kt)("li",{parentName:"ul"},"Uses Webpack"),(0,n.kt)("li",{parentName:"ul"},"Redux")),(0,n.kt)("h3",{id:"angular"},"Angular"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Google"),(0,n.kt)("li",{parentName:"ul"},"Components"),(0,n.kt)("li",{parentName:"ul"},"Framework"),(0,n.kt)("li",{parentName:"ul"},"Modular"),(0,n.kt)("li",{parentName:"ul"},"Component Router"),(0,n.kt)("li",{parentName:"ul"},"HttpClient"),(0,n.kt)("li",{parentName:"ul"},"Forms"),(0,n.kt)("li",{parentName:"ul"},"Usually TypeScript (tsc compiler)"),(0,n.kt)("li",{parentName:"ul"},"Angular CLI"),(0,n.kt)("li",{parentName:"ul"},"Uses Webpack"),(0,n.kt)("li",{parentName:"ul"},"Reactive Extensions for Angular (ngrx)")),(0,n.kt)("h3",{id:"vue"},"Vue"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Community",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Started by former Google Technologist and Meteor core team member Evan You"))),(0,n.kt)("li",{parentName:"ul"},"Components"),(0,n.kt)("li",{parentName:"ul"},"Framework"),(0,n.kt)("li",{parentName:"ul"},"Modular"),(0,n.kt)("li",{parentName:"ul"},"Vue Router (official Router)"),(0,n.kt)("li",{parentName:"ul"},"Need to include other libraries",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTTP: Axios or fetch API"),(0,n.kt)("li",{parentName:"ul"},"Forms"))),(0,n.kt)("li",{parentName:"ul"},"ES6 (Babel compiler) or TypeScript (tsc compiler)"),(0,n.kt)("li",{parentName:"ul"},"Vue CLI"),(0,n.kt)("li",{parentName:"ul"},"Vuex (State Management)")),(0,n.kt)("h3",{id:"react-angular-vue-key-insights"},"React, Angular, Vue: Key Insights"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Angular")," continues to put ",(0,n.kt)("strong",{parentName:"p"},"\u201cJS\u201d")," ",(0,n.kt)("strong",{parentName:"p"},"into HTML"),". ",(0,n.kt)("strong",{parentName:"p"},"React")," puts ",(0,n.kt)("strong",{parentName:"p"},"\u201cHTML\u201d into\xa0JS"),". \u2013 Cory House")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vue and Angular have templates which are often favored by developers without as much JavaScript experience"),(0,n.kt)("li",{parentName:"ul"},"React does not have templates because it just relies on JavaScript combined with JSX so it is often favored by developers who are fluent in JavaScript"),(0,n.kt)("li",{parentName:"ul"},"Angular is a more comprehensive framework while React is more of a targeted micro library. Vue can starts as a micro library and scales to a comprehensive framework."),(0,n.kt)("li",{parentName:"ul"},"Because React and Vue are smaller they can be:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Easier to understand",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Vue even more than React because of its use of templates and excellent documentation"))),(0,n.kt)("li",{parentName:"ul"},"Easier to include in a project"))),(0,n.kt)("li",{parentName:"ul"},"React is much more popular (but has existed longer)"),(0,n.kt)("li",{parentName:"ul"},"React and Vue is used more by design/digital/interactive agencies to build interactive websites as well as in the applications in an enterprise"),(0,n.kt)("li",{parentName:"ul"},"Angular is used more for building applications in the enterprise, particularly at larger organizations, and is getting better for website use cases")))}s.isMDXComponent=!0}}]);