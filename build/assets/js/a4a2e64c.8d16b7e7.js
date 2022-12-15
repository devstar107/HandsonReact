"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[7440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(i,".").concat(u)]||c[u]||d[u]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Elements",sidebar_label:"Elements",slug:"/elements"},o=void 0,p={unversionedId:"Elements",id:"Elements",title:"Elements",description:"React implements a browser-independent DOM system for performance and cross-browser compatibility. They call this the Virtual DOM.",source:"@site/docs/02-Elements.md",sourceDirName:".",slug:"/elements",permalink:"/docs/elements",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-Elements.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Elements",sidebar_label:"Elements",slug:"/elements"},sidebar:"someSidebar",previous:{title:"VS Code Setup",permalink:"/docs/visual-studio-code-setup"},next:{title:"JSX",permalink:"/docs/jsx"}},i={},s=[{value:"Part 1 - Hello World in JavaScript",id:"part-1---hello-world-in-javascript",level:2},{value:"Part 2 - Hello World in React",id:"part-2---hello-world-in-react",level:2},{value:"Reference",id:"reference",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React implements a browser-independent DOM system for performance and cross-browser compatibility. They call this the Virtual DOM."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A React element is not an actual instance of a ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element"},"DOM Element")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/dom-elements.html"},"React elements")," have an almost identical API to DOM Elements")),(0,r.kt)("p",null,"React elements are the building blocks of React applications.\nAn element describes what you want to see on the screen."),(0,r.kt)("p",null,"One might confuse elements with a more widely known concept of \u201ccomponents\u201d. Typically, elements are not used directly, but get returned from components."),(0,r.kt)("h2",{id:"part-1---hello-world-in-javascript"},"Part 1 - Hello World in JavaScript"),(0,r.kt)("p",null,"In this part of the course we will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello World")," application in vanilla JavaScript. We will later rewrite the application to use ",(0,r.kt)("strong",{parentName:"p"},"React"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create directory ",(0,r.kt)("inlineCode",{parentName:"p"},"demos")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mkdir demos\ncd demos\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"demos")," in your editor of choice"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If you are using VS Code you can type the following command on the command-line to open the editor"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"}," code .\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>Document</title>\n  </head>\n  <body></body>\n</html>\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If your editor supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Emmet")," you can use the code snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"html:5")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element with an id of ",(0,r.kt)("inlineCode",{parentName:"p"},"root")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<body>\n+  <div id="root"></div>\n</body>\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If your editor supports ",(0,r.kt)("inlineCode",{parentName:"p"},"Emmet")," you can use the code snippet ",(0,r.kt)("inlineCode",{parentName:"p"},"div#root")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following script tag to reference a JavaScript file that we will create in the next step."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<body>\n<div id="root"></div>\n+ <script type="text/javascript" src="/main.js"><\/script>\n</body>\n')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"! Be sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," script tag's src attribute starts with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," or the later router examples will not work properly when you refresh the page."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"demos/main.js"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the following code to ",(0,r.kt)("inlineCode",{parentName:"p"},"demos/main.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const rootElement = document.getElementById('root');\n\nconst element = document.createElement('div');\nelement.textContent = 'Hello World';\nelement.className = 'container';\nrootElement.appendChild(element);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file to store your local project dependencies. Open a command prompt/terminal in the ",(0,r.kt)("inlineCode",{parentName:"p"},"demos")," directory and run the following command."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm init --yes\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"--yes : tells npm says yes to accepting all the default values in the npm config file"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install a web server"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install serve\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Assuming you would like to serve a static site, single page application or just a static file (no matter if on your device or on the local network), ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," is a development web server that serves static content.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"It behaves exactly like static deployments on\xa0\n",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com"},"https://vercel.com"),"\nso it's perfect for developing your static project.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information see:\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/serve"},"https://www.npmjs.com/package/serve")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure an ",(0,r.kt)("inlineCode",{parentName:"p"},"npm script")," to start the web server"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'// package.json\n{\n  "name": "demos",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n+  "start": "serve -s -p 5000"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "serve": "..."\n  }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the web server"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/")," in your Chrome browser"))),(0,r.kt)("p",null,"14) Verify the page displays:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```\nHello World\n```\n")),(0,r.kt)("h2",{id:"part-2---hello-world-in-react"},"Part 2 - Hello World in React"),(0,r.kt)("p",null,"Hello World in JavaScript is not that different than it is in React. Let's update the code to see it in React."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a new cmd prompt or terminal (leave ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," running) and install ",(0,r.kt)("inlineCode",{parentName:"p"},"React")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install react react-dom --save\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the script tags to include ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," on the page. Place them just below the ",(0,r.kt)("inlineCode",{parentName:"p"},"root div")," but before the ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," tag"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/node_modules/react/umd/react.development.js"><\/script>\n<script src="/node_modules/react-dom/umd/react-dom.development.js"><\/script>\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the code to use React"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const rootElement = document.getElementById('root');\n\n// const element = document.createElement('div');\n// element.textContent = 'Hello World';\n// element.className = 'container';\n// rootElement.appendChild(element);\n\nconst element = React.createElement(\n  'div',\n  {\n    className: 'container',\n  },\n  'Hello World'\n);\n\nReactDOM.createRoot(rootElement).render(element);\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The method signature for createElement is as follows:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(type, [props], [...children]);\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log out the ",(0,r.kt)("inlineCode",{parentName:"p"},"React Element")," to the console."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const element = React.createElement(\n  'div',\n  {\n    className: 'container'\n  },\n  'Hello World'\n);\n\n+ console.log(element);\nReactDOM.createRoot(rootElement).render(element);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Chrome DevTools (F12 or fn+F12 on a laptop) to see the console output."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Notice that the React element is just an object with a ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," property that holds an object. And the ",(0,r.kt)("inlineCode",{parentName:"p"},"props")," object has three properties we are using to represent the HTML element: ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"className"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Instead of as the third parameter children (child elements-- even if just a text element as in this example) can be passed as part of the elements props (which is short for properties)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const element = React.createElement(\n    'div',\n    {\n    className: 'container'\n+       children: 'Hello World'\nor\n+       children: ['Hello World', 'Goodbye World']\n    },\n-     'Hello World'\n);\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"To summarize the ",(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement")," parameters are as follows."),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Param 1: the element you want to create"),(0,r.kt)("li",{parentName:"ul"},"Param 2: an object that contains all the properties you want to be applied or set on that element"),(0,r.kt)("li",{parentName:"ul"},"Param 3: as a convenience, you can provide the children as any number of arguments after the props"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.createElement()")," performs a few checks to help you write bug-free code but essentially it creates an object like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Note: this structure is simplified\nconst element = {\n  type: 'div',\n  props: {\n    className: 'container',\n    children: 'Hello World',\n  },\n};\n")),(0,r.kt)("p",null,"These objects are called ",(0,r.kt)("inlineCode",{parentName:"p"},"React elements"),". You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/rendering-elements.html"},"Rendering Elements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/react-api.html#createelement"},"createElement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"},"Elements vs Components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes"},"React Supported HTML Attributes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/glossary.html#elements"},"Glossary Elements"))))}c.isMDXComponent=!0}}]);