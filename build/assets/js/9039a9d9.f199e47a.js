"use strict";(self.webpackChunkhandsonreact=self.webpackChunkhandsonreact||[]).push([[5872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Professional Polish"},i=void 0,s={unversionedId:"labs/ts/A2-ProfessionalPolish",id:"labs/ts/A2-ProfessionalPolish",title:"Professional Polish",description:"Use lab25 as the starting point for these enhancements.",source:"@site/docs/labs/ts/A2-ProfessionalPolish.md",sourceDirName:"labs/ts",slug:"/labs/ts/A2-ProfessionalPolish",permalink:"/docs/labs/ts/A2-ProfessionalPolish",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/labs/ts/A2-ProfessionalPolish.md",tags:[],version:"current",frontMatter:{title:"Professional Polish"}},l={},c=[{value:"Splash Screen",id:"splash-screen",level:2},{value:"publicindex.html",id:"publicindexhtml",level:4},{value:"Skeleton Screen",id:"skeleton-screen",level:2},{value:"npm",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"<code>srcprojectsprojectAPI.ts</code>",id:"srcprojectsprojectapits",level:4},{value:"<code>srcprojectsProjectCardSkeleton.tsx</code>",id:"srcprojectsprojectcardskeletontsx",level:4},{value:"<code>srcprojectsProjectListSkeleton.tsx</code>",id:"srcprojectsprojectlistskeletontsx",level:4},{value:"<code>srcprojectsProjectsPage.tsx</code>",id:"srcprojectsprojectspagetsx",level:4},{value:"<code>srcprojectsprojectAPI.ts</code>",id:"srcprojectsprojectapits-1",level:4},{value:"Reference",id:"reference",level:3},{value:"Page Transitions",id:"page-transitions",level:2},{value:"<code>srcApp.tsx</code>",id:"srcapptsx",level:4},{value:"<code>srcindex.tsx</code>",id:"srcindextsx",level:4},{value:"<code>srcApp.tsx</code>",id:"srcapptsx-1",level:4},{value:"<code>srcprojectsProjectsPage.tsx</code>",id:"srcprojectsprojectspagetsx-1",level:4},{value:"<code>srcprojectsProjectPage.tsx</code>",id:"srcprojectsprojectpagetsx",level:4},{value:"<code>srchomeHomePage.tsx</code>",id:"srchomehomepagetsx",level:4},{value:"<code>srcindex.css</code>",id:"srcindexcss",level:5},{value:"Libraries Compared",id:"libraries-compared",level:3},{value:"Reference",id:"reference-1",level:3},{value:"TODO",id:"todo",level:2},{value:"Alerts &amp; Confirmations",id:"alerts--confirmations",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"lab25")," as the starting point for these enhancements."),(0,r.kt)("p",null,"The finished solution code for this optional lab is available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"makeover")," branch."),(0,r.kt)("h2",{id:"splash-screen"},"Splash Screen"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add a splash screen and the associated styles.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/craigmckeachie/react-course/blob/master/concepts/assets/logo-splash-screen.svg"},"logo-splash-screen.svg")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"keeptrack\\public\\assets"))),(0,r.kt)("h4",{id:"publicindexhtml"},"public\\index.html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <meta name="theme-color" content="#000000" />\n    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />\n+    <style>\n+      html,\n+      body,\n+      #root,\n+      .container,\n+      .center-page {\n+        height: 100%;\n+      }\n+\n+      .center-page {\n+        display: flex;\n+        justify-content: center;\n+        align-items: center;\n+      }\n+\n+      .loading {\n+        background-color: #dddddd;\n+      }\n+    </style>\n    <title>React App</title>\n  </head>\n...\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\n    <div id="root">\n+      <div class="center-page loading">\n+        <img src="/assets/logo-splash-screen.svg" alt="logo" />\n+      </div>\n    </div>\n...\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Refresh the app from the root (localhost:3000).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"Chrome DevTools")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"Network Tab")," > in the dropdown at the top change ",(0,r.kt)("inlineCode",{parentName:"li"},"Online")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Fast 3g")," to see the splash screen more easily.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/92810015-241b6400-f38b-11ea-9115-bc2df157c754.png",alt:"image"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The splash-screen svg is a logo with animation to fade in and out to produce an effect like Gmail when the app first loads.")),(0,r.kt)("h2",{id:"skeleton-screen"},"Skeleton Screen"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a command-prompt or terminal and run one of the following commands to install ",(0,r.kt)("inlineCode",{parentName:"li"},"react-content-loader"),".")),(0,r.kt)("h4",{id:"npm"},"npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i react-content-loader --save\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("h4",{id:"yarn"},"Yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add react-content-loader\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add a delay to your API call so it is easier to see the loader.")),(0,r.kt)("h4",{id:"srcprojectsprojectapits"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\projectAPI.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const projectAPI = {\n  ...\n  get(page = 1, limit = 20) {\n    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)\n+      .then(delay(2000))\n      .then(checkStatus)\n      .then(parseJSON)\n      .catch((error: TypeError) => {\n        console.log('log client error ' + error);\n        throw new Error(\n          'There was an error retrieving the projects. Please try again.'\n        );\n      });\n  },\n  ...\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectCardSkeleton")," component using the ",(0,r.kt)("inlineCode",{parentName:"li"},"ContentLoader")," component from the ",(0,r.kt)("inlineCode",{parentName:"li"},"react-content-loader")," library .")),(0,r.kt)("h4",{id:"srcprojectsprojectcardskeletontsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectCardSkeleton.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport ContentLoader from "react-content-loader";\n\nconst ProjectCardSkeleton = (props: any) => (\n  <ContentLoader\n    viewBox="0 0 330 404"\n    height={404}\n    width={330}\n    speed={3}\n    backgroundColor="#e0e0e0"\n    foregroundColor="#c7c7c7"\n    {...props}\n  >\n    <rect x="6" y="3" rx="10" ry="10" width="330" height="192" />\n    <rect x="20" y="210" rx="0" ry="0" width="239" height="32" />\n    <rect x="20" y="250" rx="0" ry="0" width="200" height="20" />\n    <rect x="20" y="280" rx="0" ry="0" width="150" height="20" />\n    <rect x="20" y="310" rx="0" ry="0" width="72" height="42" />\n  </ContentLoader>\n);\n\nexport default ProjectCardSkeleton;\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://skeletonreact.com/"},"Create React Content Loader (skeletonreact.com)")," site to create your own skeleton. Note that if you scroll down there are lots of examples.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectListSkeleton")," component by listing multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectCardSkeleton")," components.")),(0,r.kt)("h4",{id:"srcprojectsprojectlistskeletontsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectListSkeleton.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "react";\nimport ProjectCardSkeleton from "./ProjectCardSkeleton";\n\nconst ProjectListSkeleton = () => {\n  const numberOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];\n  const items = numberOfItems.map((item) => <ProjectCardSkeleton key={item} />);\n  return <div className="row">{items}</div>;\n};\n\nexport default ProjectListSkeleton;\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectsPage")," component's ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," state to determine when to display the ",(0,r.kt)("inlineCode",{parentName:"li"},"ProjectListSkeleton"),". Also, remove the current loading spinner.")),(0,r.kt)("h4",{id:"srcprojectsprojectspagetsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectsPage.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\n+ import ProjectListSkeleton from \'./ProjectListSkeleton\';\n\nfunction ProjectsPage() {\n...\n  return (\n    <Fragment>\n      <h1>Projects</h1>\n      ...\n\n+   {loading && <ProjectListSkeleton />}\n    <ProjectList projects={projects}></ProjectList>\n    ...\n\n  - {loading && (\n  -   <div className="center-page">\n  -     <span className="spinner primary"></span>\n  -     <p>Loading...</p>\n  -   </div>\n  - )}\n  </Fragment>\n\n  );\n}\nexport default ProjectsPage;\n\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verify the application displays the skeleton screen as shown below."),(0,r.kt)("p",{parentName:"li"},"a."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/92809324-832ca900-f38a-11ea-9fe6-c1dcb5a6b9e1.png",alt:"image"})),(0,r.kt)("p",null,"b.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1474579/92786648-6be3c080-f376-11ea-92f7-92e188cedc10.png",alt:"image"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Remove the delay from the API call.")),(0,r.kt)("h4",{id:"srcprojectsprojectapits-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\projectAPI.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"const projectAPI = {\n  ...\n  get(page = 1, limit = 20) {\n    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)\n-      .then(delay(2000))\n      .then(checkStatus)\n      .then(parseJSON)\n      .catch((error: TypeError) => {\n        console.log('log client error ' + error);\n        throw new Error(\n          'There was an error retrieving the projects. Please try again.'\n        );\n      });\n  },\n  ...\n}\n")),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/danilowoz/react-content-loader"},"React Content Loader")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://skeletonreact.com/"},"Skeleton React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/react-skeleton-screens-react-and-react-native"},"React Skeleton Screens")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.smashingmagazine.com/2020/04/skeleton-screens-react/"},"Skeleton Screens in React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.andy-howard.com/css-skeleton-screen-generator/"},"CSS Skeleton Screen Generator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codepen.io/shahbokhari/pen/oBbmXG"},"CSS Skeleton Screen Codepen Example"))),(0,r.kt)("h2",{id:"page-transitions"},"Page Transitions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"react-transition-group")," library."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"React Transition Group")," exposes simple components useful for defining entering and exiting transitions.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://reactcommunity.org/react-transition-group/"},"React Transition Group")," used to be part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," library itself but has since been removed and is part of ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactCommunity.org"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# npm\nnpm install react-transition-group\n\n# if using TypeScript\nnpm install @types/react-transition-group\n\n# yarn\nyarn add react-transition-group\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Router>")," component up one level to wrap the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),". This is necessary for us to be able to access the new ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," hook that is part of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router")," at the point we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSSTransition")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Routes")," components. We also get the ",(0,r.kt)("inlineCode",{parentName:"p"},"location")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLocation")," hook."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can't use any of the hooks from within the same component that puts the Router into the tree.\nYou need to move your BrowserRouter out of that component. It can go in ",(0,r.kt)("inlineCode",{parentName:"p"},"root.render()")," call, for instance.")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"React Transition Group")," is ",(0,r.kt)("strong",{parentName:"p"},"not an animation library")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"React-Motion"),", it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.")))),(0,r.kt)("h4",{id:"srcapptsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\App.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'...\nimport {\n-  BrowserRouter as Router,\n  Route,\n  NavLink,\n  Routes,\n+  useLocation,\n} from \'react-router-dom\';\n\n...\n\nfunction App() {\n+  let location = useLocation();\n  return (\n    <Provider store={store}>\n-      <Router>\n      <header className="sticky">\n        <span className="logo">\n          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />\n        </span>\n        <NavLink to="/" className="button rounded">\n          <span className="icon-home"></span>\n          Home\n        </NavLink>\n        <NavLink to="/projects/" className="button rounded">\n          Projects\n        </NavLink>\n      </header>\n      <div className="container">\n        <Routes location={location}>\n          <Route path="/" component={HomePage} />\n          <Route path="/projects" component={ProjectsPage} />\n          <Route path="/projects/:id" component={ProjectPage} />\n        </Routes>\n      </div>\n-      </Router>\n    </Provider>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("h4",{id:"srcindextsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\index.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"...\n+ import { BrowserRouter as Router } from 'react-router-dom';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n  <React.StrictMode>\n+    <Router>\n      <App />\n+    </Router>\n  </React.StrictMode>\n);\n\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Wrap the ",(0,r.kt)("inlineCode",{parentName:"li"},"react-router"),"'s ",(0,r.kt)("inlineCode",{parentName:"li"},"Routes")," component with a ",(0,r.kt)("inlineCode",{parentName:"li"},"TransitionGroup")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"CSSTransition")," component from the ",(0,r.kt)("inlineCode",{parentName:"li"},"react-transition-group")," library.")),(0,r.kt)("h4",{id:"srcapptsx-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\App.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { CSSTransition, TransitionGroup } from \'react-transition-group\';\n\nfunction App() {\n  let location = useLocation();\n  return (\n    <Provider store={store}>\n      <header className="sticky">\n        <span className="logo">\n          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />\n        </span>\n        <NavLink to="/"  className="button rounded">\n          <span className="icon-home"></span>\n          Home\n        </NavLink>\n        <NavLink to="/projects/" className="button rounded">\n          Projects\n        </NavLink>\n      </header>\n      <div className="container">\n+        <TransitionGroup>\n+          <CSSTransition key={location.key} classNames="fade" timeout={300}>\n-           <Routes>\n+           <Routes location={location}>\n              <Route path="/" component={HomePage} />\n              <Route path="/projects" component={ProjectsPage} />\n              <Route path="/projects/:id" component={ProjectPage} />\n            </Routes>\n+          </CSSTransition>\n+        </TransitionGroup>\n      </div>\n    </Provider>\n  );\n}\n\nexport default App;\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add a ",(0,r.kt)("inlineCode",{parentName:"li"},"page")," class to each page in the application.")),(0,r.kt)("h4",{id:"srcprojectsprojectspagetsx-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectsPage.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'export default function ProjectsPage() {\n  return (\n-    <Fragment>\n+    <div className="row page">\n     ...\n-    <Fragment>\n+    </div>\n ...\n}\n\n')),(0,r.kt)("h4",{id:"srcprojectsprojectpagetsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\projects\\ProjectPage.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'export default function ProjectPage() {\n  return (\n-    <React.Fragment>\n+    <div className="row page">\n+      <div className="col-sm-12">\n       ...\n-    </React.Fragment>\n+      </div>\n+    </div>\n ...\n}\n\n')),(0,r.kt)("h4",{id:"srchomehomepagetsx"},(0,r.kt)("inlineCode",{parentName:"h4"},"src\\home\\HomePage.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'export default function HomePage() {\n  return (\n-    <div className="row">\n+    <div className="row page">\n ...\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"page")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"fade")," CSS styles.")),(0,r.kt)("h5",{id:"srcindexcss"},(0,r.kt)("inlineCode",{parentName:"h5"},"src\\index.css")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"... \n/* add these below existing styles */\n\n.page {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n.fade-enter {\n  opacity: 0;\n  z-index: 1;\n}\n\n.fade-enter.fade-enter-active {\n  opacity: 1;\n  transition: opacity 300ms ease-in;\n}\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Click through the pages in the application and see the previous page content fade out and the new page content fade in to view.")),(0,r.kt)("h3",{id:"libraries-compared"},"Libraries Compared"),(0,r.kt)("p",null,"React Transition Group just makes transitions easier. It is not an animation library.\nReact Spring and React Framer Motion are animation libraries. Historically, React Spring has been the most popular library but React Framer Motion was released more recently and tends to be easier to use and comprehend. This article can be useful in making a decision on a library: ",(0,r.kt)("a",{parentName:"p",href:"https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/"},"What\u2019s the most developer-friendly React animation library?"),"."),(0,r.kt)("h3",{id:"reference-1"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactcommunity.org/react-transition-group/"},"React Transition Group Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/animation.html"},"React Documentation Animation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freshtilledsoil.com/whats-the-most-developer-friendly-react-animation-library/"},"What\u2019s the most developer-friendly React animation library?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactrouter.com/web/example/animated-transitions"},"React Router Animated Transitions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ReactTraining/react-router/issues/7015"},"Cannot read property 'location' of undefined at useLocation\n"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=NUQkajBdnmQ"},"How to create page transitions with React Router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=53Y8q-SgLF0"},"Animated Transitions with React Router v4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=qJt-FtzJ5fo&t=24s"},"Page Transitions in React Router (With Framer Motion)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.react-spring.io/"},"React Spring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.framer.com/motion/"},"React Framer Motion"))))),(0,r.kt)("h2",{id:"todo"},"TODO"),(0,r.kt)("p",null,"When transitioning to projects page, seems like it's in one of the libraries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node\n")),(0,r.kt)("h2",{id:"alerts--confirmations"},"Alerts & Confirmations"))}m.isMDXComponent=!0}}]);