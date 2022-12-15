"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[4408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,u=m["".concat(l,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(u,p(p({ref:t},c),{},{components:n})):a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Lab 3: Styles Using CSS"},p=void 0,o={unversionedId:"labs/js/StylesUsingCSS",id:"labs/js/StylesUsingCSS",title:"Lab 3: Styles Using CSS",description:"Objectives",source:"@site/docs/labs/js/03-StylesUsingCSS.md",sourceDirName:"labs/js",slug:"/labs/js/StylesUsingCSS",permalink:"/docs/labs/js/StylesUsingCSS",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/labs/js/03-StylesUsingCSS.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Lab 3: Styles Using CSS"},sidebar:"someSidebar",previous:{title:"Lab 2: Running Your Project",permalink:"/docs/labs/js/RunningYourProject"},next:{title:"Lab 4: Your First Component",permalink:"/docs/labs/js/YourFirstComponent"}},l={},s=[{value:"Objectives",id:"objectives",level:2},{value:"Steps",id:"steps",level:2},{value:"Install CSS",id:"install-css",level:3},{value:"Apply CSS",id:"apply-css",level:3},{value:"\u2714 You have completed Lab 3",id:"-you-have-completed-lab-3",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"objectives"},"Objectives"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install CSS"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Apply CSS")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"install-css"},"Install CSS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open")," a ",(0,r.kt)("strong",{parentName:"p"},"new")," ",(0,r.kt)("inlineCode",{parentName:"p"},"command prompt")," (Windows) or ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," (Mac) ",(0,r.kt)("strong",{parentName:"p"},"window"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"! Be sure to open a new window. Leave ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," running."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("em",{parentName:"p"},"one")," of the following commands:"),(0,r.kt)("h3",{parentName:"li",id:"npm"},"npm"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm install mini.css@3.0.1\n")),(0,r.kt)("h3",{parentName:"li",id:"yarn"},"Yarn"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"yarn add mini.css@3.0.1\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Warnings")," can be ignored but ",(0,r.kt)("inlineCode",{parentName:"p"},"Errors")," indicate there was a problem."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify ",(0,r.kt)("inlineCode",{parentName:"p"},"mini.css")," was added as a ",(0,r.kt)("inlineCode",{parentName:"p"},"dependency")," of the project in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("h4",{parentName:"li",id:"packagejson"},(0,r.kt)("inlineCode",{parentName:"h4"},"\\package.json")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n"name": "keeptrack",\n"version": "0.1.0",\n"private": true,\n"dependencies": {\n  ...\n+   "mini.css": "~3.0.1",\n  "react": "^16.9.0",\n  "react-dom": "^16.9.0",\n  "react-scripts": "3.1.1"\n  ...\n},\n...\n}\n')))),(0,r.kt)("h3",{id:"apply-css"},"Apply CSS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open")," and ",(0,r.kt)("strong",{parentName:"p"},"delete")," the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"app.css"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," returned and replace with the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML")," as shown below."),(0,r.kt)("h4",{parentName:"li",id:"srcappjs"},"src\\App.js"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'import React from \'react\';\n- import logo from \'./logo.svg\';\nimport \'./App.css\';\n\nfunction App() {\n  return (\n-     <div className="App">\n-      <header className="App-header">\n-        <img src={logo} className="App-logo" alt="logo" />\n-        <p>\n-          Edit <code>src/App.js</code> and save to reload.\n-        </p>\n-        <a\n-          className="App-link"\n-          href="https://reactjs.org"\n-          target="_blank"\n-          rel="noopener noreferrer"\n-        >\n-          Learn React!!\n-        </a>\n-      </header>\n-    </div>\n\n+    <blockquote cite="Benjamin Franklin">\n+      Tell me and I forget, teach me and I may remember, involve me and I learn.\n+    </blockquote>\n  );\n}\n\nexport default App;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"src\\index.css"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the current contents of the file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the stylesheet you installed."),(0,r.kt)("h4",{parentName:"li",id:"srcindexcss"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\index.css")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},"@import '../node_modules/mini.css/dist/mini-default.min.css';\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Alternatively, you could choose a dark theme: ",(0,r.kt)("inlineCode",{parentName:"p"},"mini-dark.min.css")," or a nordic theme: ",(0,r.kt)("inlineCode",{parentName:"p"},"mini-nord.min.css")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify you see the following output in the browser"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/64926635-c2eb9f80-d7cd-11e9-8ff7-84660d706ff9.png",alt:"image"})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://minicss.us/"},"Mini.css")," is a ",(0,r.kt)("strong",{parentName:"p"},"minimal"),", responsive, style-agnostic ",(0,r.kt)("strong",{parentName:"p"},"CSS framework"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"Mini.css")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"Bootstrap")," but lighter and ",(0,r.kt)("strong",{parentName:"p"},"requires fewer CSS classes")," so you can ",(0,r.kt)("strong",{parentName:"p"},"focus")," on learning ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," but still get a ",(0,r.kt)("strong",{parentName:"p"},"professional look"),".")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-you-have-completed-lab-3"},"\u2714"," You have completed Lab 3"))}m.isMDXComponent=!0}}]);